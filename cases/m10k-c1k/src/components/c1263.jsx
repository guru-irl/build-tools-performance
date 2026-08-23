import React from 'react';
const LABEL_1263 = 'component_1263';
export function Component1263({ value = 1263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1263, 'data-value': derived.doubled }, children);
}
export default Component1263;
