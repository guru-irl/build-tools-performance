import React from 'react';
const LABEL_10468 = 'component_10468';
export function Component10468({ value = 10468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10468, 'data-value': derived.doubled }, children);
}
export default Component10468;
