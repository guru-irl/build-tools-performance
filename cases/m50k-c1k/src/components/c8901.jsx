import React from 'react';
const LABEL_8901 = 'component_8901';
export function Component8901({ value = 8901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8901, 'data-value': derived.doubled }, children);
}
export default Component8901;
