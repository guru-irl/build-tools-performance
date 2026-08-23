import React from 'react';
const LABEL_26974 = 'component_26974';
export function Component26974({ value = 26974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26974, 'data-value': derived.doubled }, children);
}
export default Component26974;
