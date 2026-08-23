import React from 'react';
const LABEL_10925 = 'component_10925';
export function Component10925({ value = 10925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10925, 'data-value': derived.doubled }, children);
}
export default Component10925;
