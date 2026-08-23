import React from 'react';
const LABEL_12854 = 'component_12854';
export function Component12854({ value = 12854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12854, 'data-value': derived.doubled }, children);
}
export default Component12854;
