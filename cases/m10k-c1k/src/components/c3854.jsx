import React from 'react';
const LABEL_3854 = 'component_3854';
export function Component3854({ value = 3854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3854, 'data-value': derived.doubled }, children);
}
export default Component3854;
