import React from 'react';
const LABEL_33974 = 'component_33974';
export function Component33974({ value = 33974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33974, 'data-value': derived.doubled }, children);
}
export default Component33974;
