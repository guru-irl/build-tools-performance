import React from 'react';
const LABEL_3066 = 'component_3066';
export function Component3066({ value = 3066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3066, 'data-value': derived.doubled }, children);
}
export default Component3066;
