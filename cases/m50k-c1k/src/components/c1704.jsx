import React from 'react';
const LABEL_1704 = 'component_1704';
export function Component1704({ value = 1704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1704, 'data-value': derived.doubled }, children);
}
export default Component1704;
