import React from 'react';
const LABEL_1177 = 'component_1177';
export function Component1177({ value = 1177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1177, 'data-value': derived.doubled }, children);
}
export default Component1177;
