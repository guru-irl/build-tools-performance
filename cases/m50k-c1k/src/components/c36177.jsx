import React from 'react';
const LABEL_36177 = 'component_36177';
export function Component36177({ value = 36177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36177, 'data-value': derived.doubled }, children);
}
export default Component36177;
