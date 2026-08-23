import React from 'react';
const LABEL_1415 = 'component_1415';
export function Component1415({ value = 1415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1415, 'data-value': derived.doubled }, children);
}
export default Component1415;
