import React from 'react';
const LABEL_21828 = 'component_21828';
export function Component21828({ value = 21828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21828, 'data-value': derived.doubled }, children);
}
export default Component21828;
