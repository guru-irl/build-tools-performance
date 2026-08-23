import React from 'react';
const LABEL_4527 = 'component_4527';
export function Component4527({ value = 4527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4527, 'data-value': derived.doubled }, children);
}
export default Component4527;
