import React from 'react';
const LABEL_41893 = 'component_41893';
export function Component41893({ value = 41893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41893, 'data-value': derived.doubled }, children);
}
export default Component41893;
