import React from 'react';
const LABEL_1806 = 'component_1806';
export function Component1806({ value = 1806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1806, 'data-value': derived.doubled }, children);
}
export default Component1806;
