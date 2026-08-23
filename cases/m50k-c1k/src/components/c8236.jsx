import React from 'react';
const LABEL_8236 = 'component_8236';
export function Component8236({ value = 8236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8236, 'data-value': derived.doubled }, children);
}
export default Component8236;
