import React from 'react';
const LABEL_18199 = 'component_18199';
export function Component18199({ value = 18199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18199, 'data-value': derived.doubled }, children);
}
export default Component18199;
