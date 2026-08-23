import React from 'react';
const LABEL_44938 = 'component_44938';
export function Component44938({ value = 44938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44938, 'data-value': derived.doubled }, children);
}
export default Component44938;
