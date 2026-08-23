import React from 'react';
const LABEL_3749 = 'component_3749';
export function Component3749({ value = 3749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3749, 'data-value': derived.doubled }, children);
}
export default Component3749;
