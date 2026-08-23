import React from 'react';
const LABEL_1867 = 'component_1867';
export function Component1867({ value = 1867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1867, 'data-value': derived.doubled }, children);
}
export default Component1867;
