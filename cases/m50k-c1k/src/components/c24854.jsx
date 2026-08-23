import React from 'react';
const LABEL_24854 = 'component_24854';
export function Component24854({ value = 24854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24854, 'data-value': derived.doubled }, children);
}
export default Component24854;
