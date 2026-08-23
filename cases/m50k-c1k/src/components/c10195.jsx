import React from 'react';
const LABEL_10195 = 'component_10195';
export function Component10195({ value = 10195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10195, 'data-value': derived.doubled }, children);
}
export default Component10195;
