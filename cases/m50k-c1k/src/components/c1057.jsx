import React from 'react';
const LABEL_1057 = 'component_1057';
export function Component1057({ value = 1057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1057, 'data-value': derived.doubled }, children);
}
export default Component1057;
