import React from 'react';
const LABEL_3049 = 'component_3049';
export function Component3049({ value = 3049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3049, 'data-value': derived.doubled }, children);
}
export default Component3049;
