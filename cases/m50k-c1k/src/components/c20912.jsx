import React from 'react';
const LABEL_20912 = 'component_20912';
export function Component20912({ value = 20912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20912, 'data-value': derived.doubled }, children);
}
export default Component20912;
