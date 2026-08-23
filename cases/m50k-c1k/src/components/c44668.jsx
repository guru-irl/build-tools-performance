import React from 'react';
const LABEL_44668 = 'component_44668';
export function Component44668({ value = 44668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44668, 'data-value': derived.doubled }, children);
}
export default Component44668;
