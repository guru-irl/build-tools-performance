import React from 'react';
const LABEL_1063 = 'component_1063';
export function Component1063({ value = 1063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1063, 'data-value': derived.doubled }, children);
}
export default Component1063;
