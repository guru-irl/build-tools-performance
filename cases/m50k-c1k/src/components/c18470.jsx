import React from 'react';
const LABEL_18470 = 'component_18470';
export function Component18470({ value = 18470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18470, 'data-value': derived.doubled }, children);
}
export default Component18470;
