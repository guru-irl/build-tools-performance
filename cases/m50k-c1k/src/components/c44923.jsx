import React from 'react';
const LABEL_44923 = 'component_44923';
export function Component44923({ value = 44923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44923, 'data-value': derived.doubled }, children);
}
export default Component44923;
