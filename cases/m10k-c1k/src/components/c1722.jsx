import React from 'react';
const LABEL_1722 = 'component_1722';
export function Component1722({ value = 1722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1722, 'data-value': derived.doubled }, children);
}
export default Component1722;
