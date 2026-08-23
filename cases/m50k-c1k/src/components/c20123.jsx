import React from 'react';
const LABEL_20123 = 'component_20123';
export function Component20123({ value = 20123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20123, 'data-value': derived.doubled }, children);
}
export default Component20123;
