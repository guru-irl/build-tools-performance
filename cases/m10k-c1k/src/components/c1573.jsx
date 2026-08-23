import React from 'react';
const LABEL_1573 = 'component_1573';
export function Component1573({ value = 1573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1573, 'data-value': derived.doubled }, children);
}
export default Component1573;
