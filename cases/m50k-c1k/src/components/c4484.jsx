import React from 'react';
const LABEL_4484 = 'component_4484';
export function Component4484({ value = 4484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4484, 'data-value': derived.doubled }, children);
}
export default Component4484;
