import React from 'react';
const LABEL_7941 = 'component_7941';
export function Component7941({ value = 7941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7941, 'data-value': derived.doubled }, children);
}
export default Component7941;
