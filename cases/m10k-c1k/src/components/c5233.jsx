import React from 'react';
const LABEL_5233 = 'component_5233';
export function Component5233({ value = 5233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5233, 'data-value': derived.doubled }, children);
}
export default Component5233;
