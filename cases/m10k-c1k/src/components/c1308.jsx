import React from 'react';
const LABEL_1308 = 'component_1308';
export function Component1308({ value = 1308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1308, 'data-value': derived.doubled }, children);
}
export default Component1308;
