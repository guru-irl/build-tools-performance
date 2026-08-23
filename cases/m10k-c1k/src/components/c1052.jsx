import React from 'react';
const LABEL_1052 = 'component_1052';
export function Component1052({ value = 1052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1052, 'data-value': derived.doubled }, children);
}
export default Component1052;
