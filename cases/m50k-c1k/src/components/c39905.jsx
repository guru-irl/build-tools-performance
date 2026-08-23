import React from 'react';
const LABEL_39905 = 'component_39905';
export function Component39905({ value = 39905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39905, 'data-value': derived.doubled }, children);
}
export default Component39905;
