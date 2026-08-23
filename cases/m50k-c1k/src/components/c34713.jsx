import React from 'react';
const LABEL_34713 = 'component_34713';
export function Component34713({ value = 34713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34713, 'data-value': derived.doubled }, children);
}
export default Component34713;
