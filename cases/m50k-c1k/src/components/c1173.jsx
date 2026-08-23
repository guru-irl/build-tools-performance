import React from 'react';
const LABEL_1173 = 'component_1173';
export function Component1173({ value = 1173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1173, 'data-value': derived.doubled }, children);
}
export default Component1173;
