import React from 'react';
const LABEL_40222 = 'component_40222';
export function Component40222({ value = 40222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40222, 'data-value': derived.doubled }, children);
}
export default Component40222;
