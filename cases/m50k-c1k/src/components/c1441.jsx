import React from 'react';
const LABEL_1441 = 'component_1441';
export function Component1441({ value = 1441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1441, 'data-value': derived.doubled }, children);
}
export default Component1441;
