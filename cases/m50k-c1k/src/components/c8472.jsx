import React from 'react';
const LABEL_8472 = 'component_8472';
export function Component8472({ value = 8472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8472, 'data-value': derived.doubled }, children);
}
export default Component8472;
