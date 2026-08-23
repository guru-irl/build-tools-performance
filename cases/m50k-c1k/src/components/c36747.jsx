import React from 'react';
const LABEL_36747 = 'component_36747';
export function Component36747({ value = 36747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36747, 'data-value': derived.doubled }, children);
}
export default Component36747;
