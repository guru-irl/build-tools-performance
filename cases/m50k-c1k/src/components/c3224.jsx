import React from 'react';
const LABEL_3224 = 'component_3224';
export function Component3224({ value = 3224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3224, 'data-value': derived.doubled }, children);
}
export default Component3224;
