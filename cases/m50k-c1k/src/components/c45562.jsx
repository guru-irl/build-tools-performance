import React from 'react';
const LABEL_45562 = 'component_45562';
export function Component45562({ value = 45562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45562, 'data-value': derived.doubled }, children);
}
export default Component45562;
