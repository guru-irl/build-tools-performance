import React from 'react';
const LABEL_1005 = 'component_1005';
export function Component1005({ value = 1005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1005, 'data-value': derived.doubled }, children);
}
export default Component1005;
