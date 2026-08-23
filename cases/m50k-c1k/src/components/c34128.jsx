import React from 'react';
const LABEL_34128 = 'component_34128';
export function Component34128({ value = 34128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34128, 'data-value': derived.doubled }, children);
}
export default Component34128;
