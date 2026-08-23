import React from 'react';
const LABEL_1975 = 'component_1975';
export function Component1975({ value = 1975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1975, 'data-value': derived.doubled }, children);
}
export default Component1975;
