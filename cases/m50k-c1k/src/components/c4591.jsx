import React from 'react';
const LABEL_4591 = 'component_4591';
export function Component4591({ value = 4591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4591, 'data-value': derived.doubled }, children);
}
export default Component4591;
