import React from 'react';
const LABEL_41831 = 'component_41831';
export function Component41831({ value = 41831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41831, 'data-value': derived.doubled }, children);
}
export default Component41831;
