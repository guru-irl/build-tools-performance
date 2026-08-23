import React from 'react';
const LABEL_3107 = 'component_3107';
export function Component3107({ value = 3107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3107, 'data-value': derived.doubled }, children);
}
export default Component3107;
