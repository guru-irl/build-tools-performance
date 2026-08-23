import React from 'react';
const LABEL_1051 = 'component_1051';
export function Component1051({ value = 1051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1051, 'data-value': derived.doubled }, children);
}
export default Component1051;
