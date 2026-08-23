import React from 'react';
const LABEL_44749 = 'component_44749';
export function Component44749({ value = 44749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44749, 'data-value': derived.doubled }, children);
}
export default Component44749;
