import React from 'react';
const LABEL_44016 = 'component_44016';
export function Component44016({ value = 44016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44016, 'data-value': derived.doubled }, children);
}
export default Component44016;
