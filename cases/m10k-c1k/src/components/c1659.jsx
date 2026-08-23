import React from 'react';
const LABEL_1659 = 'component_1659';
export function Component1659({ value = 1659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1659, 'data-value': derived.doubled }, children);
}
export default Component1659;
