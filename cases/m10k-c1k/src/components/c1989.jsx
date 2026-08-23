import React from 'react';
const LABEL_1989 = 'component_1989';
export function Component1989({ value = 1989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1989, 'data-value': derived.doubled }, children);
}
export default Component1989;
