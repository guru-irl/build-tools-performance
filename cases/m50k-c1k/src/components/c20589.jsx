import React from 'react';
const LABEL_20589 = 'component_20589';
export function Component20589({ value = 20589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20589, 'data-value': derived.doubled }, children);
}
export default Component20589;
