import React from 'react';
const LABEL_10645 = 'component_10645';
export function Component10645({ value = 10645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10645, 'data-value': derived.doubled }, children);
}
export default Component10645;
