import React from 'react';
const LABEL_5236 = 'component_5236';
export function Component5236({ value = 5236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5236, 'data-value': derived.doubled }, children);
}
export default Component5236;
