import React from 'react';
const LABEL_24241 = 'component_24241';
export function Component24241({ value = 24241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24241, 'data-value': derived.doubled }, children);
}
export default Component24241;
