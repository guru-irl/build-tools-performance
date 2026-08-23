import React from 'react';
const LABEL_25854 = 'component_25854';
export function Component25854({ value = 25854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25854, 'data-value': derived.doubled }, children);
}
export default Component25854;
