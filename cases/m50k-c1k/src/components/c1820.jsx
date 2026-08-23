import React from 'react';
const LABEL_1820 = 'component_1820';
export function Component1820({ value = 1820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1820, 'data-value': derived.doubled }, children);
}
export default Component1820;
