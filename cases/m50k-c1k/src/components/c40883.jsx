import React from 'react';
const LABEL_40883 = 'component_40883';
export function Component40883({ value = 40883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40883, 'data-value': derived.doubled }, children);
}
export default Component40883;
