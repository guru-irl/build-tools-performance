import React from 'react';
const LABEL_1727 = 'component_1727';
export function Component1727({ value = 1727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1727, 'data-value': derived.doubled }, children);
}
export default Component1727;
