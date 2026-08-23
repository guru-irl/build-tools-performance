import React from 'react';
const LABEL_44854 = 'component_44854';
export function Component44854({ value = 44854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44854, 'data-value': derived.doubled }, children);
}
export default Component44854;
