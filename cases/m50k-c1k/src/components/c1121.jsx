import React from 'react';
const LABEL_1121 = 'component_1121';
export function Component1121({ value = 1121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1121, 'data-value': derived.doubled }, children);
}
export default Component1121;
