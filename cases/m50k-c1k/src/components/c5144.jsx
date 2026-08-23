import React from 'react';
const LABEL_5144 = 'component_5144';
export function Component5144({ value = 5144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5144, 'data-value': derived.doubled }, children);
}
export default Component5144;
