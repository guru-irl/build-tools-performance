import React from 'react';
const LABEL_39938 = 'component_39938';
export function Component39938({ value = 39938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39938, 'data-value': derived.doubled }, children);
}
export default Component39938;
