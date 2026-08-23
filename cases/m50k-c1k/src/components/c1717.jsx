import React from 'react';
const LABEL_1717 = 'component_1717';
export function Component1717({ value = 1717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1717, 'data-value': derived.doubled }, children);
}
export default Component1717;
