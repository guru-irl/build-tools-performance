import React from 'react';
const LABEL_1139 = 'component_1139';
export function Component1139({ value = 1139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1139, 'data-value': derived.doubled }, children);
}
export default Component1139;
