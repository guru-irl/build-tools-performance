import React from 'react';
const LABEL_11426 = 'component_11426';
export function Component11426({ value = 11426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11426, 'data-value': derived.doubled }, children);
}
export default Component11426;
