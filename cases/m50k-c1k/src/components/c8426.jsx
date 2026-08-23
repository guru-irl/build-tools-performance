import React from 'react';
const LABEL_8426 = 'component_8426';
export function Component8426({ value = 8426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8426, 'data-value': derived.doubled }, children);
}
export default Component8426;
