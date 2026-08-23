import React from 'react';
const LABEL_37749 = 'component_37749';
export function Component37749({ value = 37749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37749, 'data-value': derived.doubled }, children);
}
export default Component37749;
