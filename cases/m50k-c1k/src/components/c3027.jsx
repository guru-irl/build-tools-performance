import React from 'react';
const LABEL_3027 = 'component_3027';
export function Component3027({ value = 3027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3027, 'data-value': derived.doubled }, children);
}
export default Component3027;
