import React from 'react';
const LABEL_34868 = 'component_34868';
export function Component34868({ value = 34868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34868, 'data-value': derived.doubled }, children);
}
export default Component34868;
