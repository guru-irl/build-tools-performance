import React from 'react';
const LABEL_40468 = 'component_40468';
export function Component40468({ value = 40468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40468, 'data-value': derived.doubled }, children);
}
export default Component40468;
