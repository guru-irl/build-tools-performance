import React from 'react';
const LABEL_1117 = 'component_1117';
export function Component1117({ value = 1117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1117, 'data-value': derived.doubled }, children);
}
export default Component1117;
