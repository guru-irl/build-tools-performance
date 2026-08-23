import React from 'react';
const LABEL_34236 = 'component_34236';
export function Component34236({ value = 34236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34236, 'data-value': derived.doubled }, children);
}
export default Component34236;
