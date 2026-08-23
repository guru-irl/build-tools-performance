import React from 'react';
const LABEL_39716 = 'component_39716';
export function Component39716({ value = 39716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39716, 'data-value': derived.doubled }, children);
}
export default Component39716;
