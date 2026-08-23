import React from 'react';
const LABEL_20752 = 'component_20752';
export function Component20752({ value = 20752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20752, 'data-value': derived.doubled }, children);
}
export default Component20752;
