import React from 'react';
const LABEL_1627 = 'component_1627';
export function Component1627({ value = 1627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1627, 'data-value': derived.doubled }, children);
}
export default Component1627;
