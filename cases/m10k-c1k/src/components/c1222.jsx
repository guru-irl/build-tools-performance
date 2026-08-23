import React from 'react';
const LABEL_1222 = 'component_1222';
export function Component1222({ value = 1222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1222, 'data-value': derived.doubled }, children);
}
export default Component1222;
