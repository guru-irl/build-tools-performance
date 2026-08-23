import React from 'react';
const LABEL_39591 = 'component_39591';
export function Component39591({ value = 39591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39591, 'data-value': derived.doubled }, children);
}
export default Component39591;
