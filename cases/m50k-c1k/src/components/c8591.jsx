import React from 'react';
const LABEL_8591 = 'component_8591';
export function Component8591({ value = 8591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8591, 'data-value': derived.doubled }, children);
}
export default Component8591;
