import React from 'react';
const LABEL_36059 = 'component_36059';
export function Component36059({ value = 36059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36059, 'data-value': derived.doubled }, children);
}
export default Component36059;
