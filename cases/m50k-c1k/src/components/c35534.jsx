import React from 'react';
const LABEL_35534 = 'component_35534';
export function Component35534({ value = 35534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35534, 'data-value': derived.doubled }, children);
}
export default Component35534;
