import React from 'react';
const LABEL_39693 = 'component_39693';
export function Component39693({ value = 39693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39693, 'data-value': derived.doubled }, children);
}
export default Component39693;
