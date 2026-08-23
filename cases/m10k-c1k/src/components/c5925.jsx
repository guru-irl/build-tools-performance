import React from 'react';
const LABEL_5925 = 'component_5925';
export function Component5925({ value = 5925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5925, 'data-value': derived.doubled }, children);
}
export default Component5925;
