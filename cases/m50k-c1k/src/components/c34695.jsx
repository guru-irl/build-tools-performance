import React from 'react';
const LABEL_34695 = 'component_34695';
export function Component34695({ value = 34695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34695, 'data-value': derived.doubled }, children);
}
export default Component34695;
