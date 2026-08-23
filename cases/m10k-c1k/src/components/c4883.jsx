import React from 'react';
const LABEL_4883 = 'component_4883';
export function Component4883({ value = 4883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4883, 'data-value': derived.doubled }, children);
}
export default Component4883;
