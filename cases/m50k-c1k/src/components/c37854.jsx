import React from 'react';
const LABEL_37854 = 'component_37854';
export function Component37854({ value = 37854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37854, 'data-value': derived.doubled }, children);
}
export default Component37854;
