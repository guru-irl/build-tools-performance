import React from 'react';
const LABEL_7203 = 'component_7203';
export function Component7203({ value = 7203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7203, 'data-value': derived.doubled }, children);
}
export default Component7203;
