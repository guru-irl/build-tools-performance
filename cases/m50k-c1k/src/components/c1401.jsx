import React from 'react';
const LABEL_1401 = 'component_1401';
export function Component1401({ value = 1401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1401, 'data-value': derived.doubled }, children);
}
export default Component1401;
