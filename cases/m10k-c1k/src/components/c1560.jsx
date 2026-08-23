import React from 'react';
const LABEL_1560 = 'component_1560';
export function Component1560({ value = 1560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1560, 'data-value': derived.doubled }, children);
}
export default Component1560;
