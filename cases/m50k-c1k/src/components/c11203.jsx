import React from 'react';
const LABEL_11203 = 'component_11203';
export function Component11203({ value = 11203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11203, 'data-value': derived.doubled }, children);
}
export default Component11203;
