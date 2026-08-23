import React from 'react';
const LABEL_39325 = 'component_39325';
export function Component39325({ value = 39325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39325, 'data-value': derived.doubled }, children);
}
export default Component39325;
