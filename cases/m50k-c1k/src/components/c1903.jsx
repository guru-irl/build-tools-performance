import React from 'react';
const LABEL_1903 = 'component_1903';
export function Component1903({ value = 1903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1903, 'data-value': derived.doubled }, children);
}
export default Component1903;
