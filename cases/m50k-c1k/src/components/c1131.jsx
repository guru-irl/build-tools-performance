import React from 'react';
const LABEL_1131 = 'component_1131';
export function Component1131({ value = 1131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1131, 'data-value': derived.doubled }, children);
}
export default Component1131;
