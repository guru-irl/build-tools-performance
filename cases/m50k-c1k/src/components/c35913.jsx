import React from 'react';
const LABEL_35913 = 'component_35913';
export function Component35913({ value = 35913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35913, 'data-value': derived.doubled }, children);
}
export default Component35913;
