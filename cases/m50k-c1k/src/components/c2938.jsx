import React from 'react';
const LABEL_2938 = 'component_2938';
export function Component2938({ value = 2938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2938, 'data-value': derived.doubled }, children);
}
export default Component2938;
