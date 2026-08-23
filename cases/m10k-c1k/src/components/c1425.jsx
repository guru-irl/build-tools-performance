import React from 'react';
const LABEL_1425 = 'component_1425';
export function Component1425({ value = 1425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1425, 'data-value': derived.doubled }, children);
}
export default Component1425;
