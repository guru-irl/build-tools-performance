import React from 'react';
const LABEL_20749 = 'component_20749';
export function Component20749({ value = 20749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20749, 'data-value': derived.doubled }, children);
}
export default Component20749;
