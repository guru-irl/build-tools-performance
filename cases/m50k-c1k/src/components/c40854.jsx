import React from 'react';
const LABEL_40854 = 'component_40854';
export function Component40854({ value = 40854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40854, 'data-value': derived.doubled }, children);
}
export default Component40854;
