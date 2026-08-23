import React from 'react';
const LABEL_1073 = 'component_1073';
export function Component1073({ value = 1073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1073, 'data-value': derived.doubled }, children);
}
export default Component1073;
