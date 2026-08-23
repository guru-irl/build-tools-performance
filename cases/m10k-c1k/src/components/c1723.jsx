import React from 'react';
const LABEL_1723 = 'component_1723';
export function Component1723({ value = 1723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1723, 'data-value': derived.doubled }, children);
}
export default Component1723;
