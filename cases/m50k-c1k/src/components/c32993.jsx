import React from 'react';
const LABEL_32993 = 'component_32993';
export function Component32993({ value = 32993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32993, 'data-value': derived.doubled }, children);
}
export default Component32993;
