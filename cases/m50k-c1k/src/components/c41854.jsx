import React from 'react';
const LABEL_41854 = 'component_41854';
export function Component41854({ value = 41854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41854, 'data-value': derived.doubled }, children);
}
export default Component41854;
