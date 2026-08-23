import React from 'react';
const LABEL_2463 = 'component_2463';
export function Component2463({ value = 2463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2463, 'data-value': derived.doubled }, children);
}
export default Component2463;
