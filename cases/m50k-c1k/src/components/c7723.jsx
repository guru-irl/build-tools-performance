import React from 'react';
const LABEL_7723 = 'component_7723';
export function Component7723({ value = 7723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7723, 'data-value': derived.doubled }, children);
}
export default Component7723;
