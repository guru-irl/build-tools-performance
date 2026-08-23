import React from 'react';
const LABEL_7177 = 'component_7177';
export function Component7177({ value = 7177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7177, 'data-value': derived.doubled }, children);
}
export default Component7177;
