import React from 'react';
const LABEL_24669 = 'component_24669';
export function Component24669({ value = 24669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24669, 'data-value': derived.doubled }, children);
}
export default Component24669;
