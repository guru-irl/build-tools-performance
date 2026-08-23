import React from 'react';
const LABEL_46184 = 'component_46184';
export function Component46184({ value = 46184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46184, 'data-value': derived.doubled }, children);
}
export default Component46184;
