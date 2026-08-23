import React from 'react';
const LABEL_1645 = 'component_1645';
export function Component1645({ value = 1645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1645, 'data-value': derived.doubled }, children);
}
export default Component1645;
