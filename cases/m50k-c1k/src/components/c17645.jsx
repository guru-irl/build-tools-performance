import React from 'react';
const LABEL_17645 = 'component_17645';
export function Component17645({ value = 17645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17645, 'data-value': derived.doubled }, children);
}
export default Component17645;
