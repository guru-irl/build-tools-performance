import React from 'react';
const LABEL_1059 = 'component_1059';
export function Component1059({ value = 1059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1059, 'data-value': derived.doubled }, children);
}
export default Component1059;
