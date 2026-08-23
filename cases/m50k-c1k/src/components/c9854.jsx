import React from 'react';
const LABEL_9854 = 'component_9854';
export function Component9854({ value = 9854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9854, 'data-value': derived.doubled }, children);
}
export default Component9854;
