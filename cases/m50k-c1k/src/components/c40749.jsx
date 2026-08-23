import React from 'react';
const LABEL_40749 = 'component_40749';
export function Component40749({ value = 40749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40749, 'data-value': derived.doubled }, children);
}
export default Component40749;
