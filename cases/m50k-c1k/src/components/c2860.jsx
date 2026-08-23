import React from 'react';
const LABEL_2860 = 'component_2860';
export function Component2860({ value = 2860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2860, 'data-value': derived.doubled }, children);
}
export default Component2860;
