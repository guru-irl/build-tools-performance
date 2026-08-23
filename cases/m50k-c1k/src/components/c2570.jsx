import React from 'react';
const LABEL_2570 = 'component_2570';
export function Component2570({ value = 2570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2570, 'data-value': derived.doubled }, children);
}
export default Component2570;
