import React from 'react';
const LABEL_854 = 'component_854';
export function Component854({ value = 854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_854, 'data-value': derived.doubled }, children);
}
export default Component854;
