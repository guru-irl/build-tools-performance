import React from 'react';
const LABEL_3645 = 'component_3645';
export function Component3645({ value = 3645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3645, 'data-value': derived.doubled }, children);
}
export default Component3645;
