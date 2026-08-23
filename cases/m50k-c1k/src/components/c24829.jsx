import React from 'react';
const LABEL_24829 = 'component_24829';
export function Component24829({ value = 24829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24829, 'data-value': derived.doubled }, children);
}
export default Component24829;
