import React from 'react';
const LABEL_4709 = 'component_4709';
export function Component4709({ value = 4709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4709, 'data-value': derived.doubled }, children);
}
export default Component4709;
