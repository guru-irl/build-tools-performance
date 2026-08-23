import React from 'react';
const LABEL_1172 = 'component_1172';
export function Component1172({ value = 1172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1172, 'data-value': derived.doubled }, children);
}
export default Component1172;
