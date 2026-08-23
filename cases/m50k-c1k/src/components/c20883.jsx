import React from 'react';
const LABEL_20883 = 'component_20883';
export function Component20883({ value = 20883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20883, 'data-value': derived.doubled }, children);
}
export default Component20883;
