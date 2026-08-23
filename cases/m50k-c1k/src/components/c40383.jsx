import React from 'react';
const LABEL_40383 = 'component_40383';
export function Component40383({ value = 40383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40383, 'data-value': derived.doubled }, children);
}
export default Component40383;
