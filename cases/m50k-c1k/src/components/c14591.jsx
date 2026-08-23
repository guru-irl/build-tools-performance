import React from 'react';
const LABEL_14591 = 'component_14591';
export function Component14591({ value = 14591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14591, 'data-value': derived.doubled }, children);
}
export default Component14591;
