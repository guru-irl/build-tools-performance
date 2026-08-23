import React from 'react';
const LABEL_34271 = 'component_34271';
export function Component34271({ value = 34271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34271, 'data-value': derived.doubled }, children);
}
export default Component34271;
