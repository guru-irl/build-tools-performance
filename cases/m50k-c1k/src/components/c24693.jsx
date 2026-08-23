import React from 'react';
const LABEL_24693 = 'component_24693';
export function Component24693({ value = 24693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24693, 'data-value': derived.doubled }, children);
}
export default Component24693;
