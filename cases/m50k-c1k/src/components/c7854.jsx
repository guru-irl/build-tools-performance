import React from 'react';
const LABEL_7854 = 'component_7854';
export function Component7854({ value = 7854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7854, 'data-value': derived.doubled }, children);
}
export default Component7854;
