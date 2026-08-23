import React from 'react';
const LABEL_1017 = 'component_1017';
export function Component1017({ value = 1017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1017, 'data-value': derived.doubled }, children);
}
export default Component1017;
