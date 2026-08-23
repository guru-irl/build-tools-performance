import React from 'react';
const LABEL_8520 = 'component_8520';
export function Component8520({ value = 8520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8520, 'data-value': derived.doubled }, children);
}
export default Component8520;
