import React from 'react';
const LABEL_15302 = 'component_15302';
export function Component15302({ value = 15302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15302, 'data-value': derived.doubled }, children);
}
export default Component15302;
