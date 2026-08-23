import React from 'react';
const LABEL_1663 = 'component_1663';
export function Component1663({ value = 1663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1663, 'data-value': derived.doubled }, children);
}
export default Component1663;
