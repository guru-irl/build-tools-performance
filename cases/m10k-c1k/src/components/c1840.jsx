import React from 'react';
const LABEL_1840 = 'component_1840';
export function Component1840({ value = 1840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1840, 'data-value': derived.doubled }, children);
}
export default Component1840;
