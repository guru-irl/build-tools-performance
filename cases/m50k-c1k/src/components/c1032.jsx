import React from 'react';
const LABEL_1032 = 'component_1032';
export function Component1032({ value = 1032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1032, 'data-value': derived.doubled }, children);
}
export default Component1032;
