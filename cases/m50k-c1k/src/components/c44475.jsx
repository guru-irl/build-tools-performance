import React from 'react';
const LABEL_44475 = 'component_44475';
export function Component44475({ value = 44475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44475, 'data-value': derived.doubled }, children);
}
export default Component44475;
