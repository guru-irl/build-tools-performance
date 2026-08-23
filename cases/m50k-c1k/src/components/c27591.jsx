import React from 'react';
const LABEL_27591 = 'component_27591';
export function Component27591({ value = 27591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27591, 'data-value': derived.doubled }, children);
}
export default Component27591;
