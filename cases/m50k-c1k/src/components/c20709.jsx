import React from 'react';
const LABEL_20709 = 'component_20709';
export function Component20709({ value = 20709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20709, 'data-value': derived.doubled }, children);
}
export default Component20709;
