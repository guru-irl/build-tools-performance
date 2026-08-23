import React from 'react';
const LABEL_1183 = 'component_1183';
export function Component1183({ value = 1183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1183, 'data-value': derived.doubled }, children);
}
export default Component1183;
