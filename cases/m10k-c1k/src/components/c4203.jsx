import React from 'react';
const LABEL_4203 = 'component_4203';
export function Component4203({ value = 4203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4203, 'data-value': derived.doubled }, children);
}
export default Component4203;
