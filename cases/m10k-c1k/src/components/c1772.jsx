import React from 'react';
const LABEL_1772 = 'component_1772';
export function Component1772({ value = 1772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1772, 'data-value': derived.doubled }, children);
}
export default Component1772;
