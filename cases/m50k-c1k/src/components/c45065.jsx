import React from 'react';
const LABEL_45065 = 'component_45065';
export function Component45065({ value = 45065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45065, 'data-value': derived.doubled }, children);
}
export default Component45065;
