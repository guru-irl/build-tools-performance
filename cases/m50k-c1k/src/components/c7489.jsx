import React from 'react';
const LABEL_7489 = 'component_7489';
export function Component7489({ value = 7489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7489, 'data-value': derived.doubled }, children);
}
export default Component7489;
