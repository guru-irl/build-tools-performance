import React from 'react';
const LABEL_10786 = 'component_10786';
export function Component10786({ value = 10786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10786, 'data-value': derived.doubled }, children);
}
export default Component10786;
