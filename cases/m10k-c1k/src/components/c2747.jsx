import React from 'react';
const LABEL_2747 = 'component_2747';
export function Component2747({ value = 2747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2747, 'data-value': derived.doubled }, children);
}
export default Component2747;
