import React from 'react';
const LABEL_1209 = 'component_1209';
export function Component1209({ value = 1209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1209, 'data-value': derived.doubled }, children);
}
export default Component1209;
