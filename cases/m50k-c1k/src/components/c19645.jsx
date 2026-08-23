import React from 'react';
const LABEL_19645 = 'component_19645';
export function Component19645({ value = 19645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19645, 'data-value': derived.doubled }, children);
}
export default Component19645;
