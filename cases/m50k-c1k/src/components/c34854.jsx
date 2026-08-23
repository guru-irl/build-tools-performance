import React from 'react';
const LABEL_34854 = 'component_34854';
export function Component34854({ value = 34854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34854, 'data-value': derived.doubled }, children);
}
export default Component34854;
