import React from 'react';
const LABEL_1556 = 'component_1556';
export function Component1556({ value = 1556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1556, 'data-value': derived.doubled }, children);
}
export default Component1556;
