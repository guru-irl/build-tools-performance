import React from 'react';
const LABEL_1466 = 'component_1466';
export function Component1466({ value = 1466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1466, 'data-value': derived.doubled }, children);
}
export default Component1466;
