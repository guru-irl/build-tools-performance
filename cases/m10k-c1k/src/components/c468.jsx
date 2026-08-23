import React from 'react';
const LABEL_468 = 'component_468';
export function Component468({ value = 468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_468, 'data-value': derived.doubled }, children);
}
export default Component468;
