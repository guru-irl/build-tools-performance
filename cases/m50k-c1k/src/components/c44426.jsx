import React from 'react';
const LABEL_44426 = 'component_44426';
export function Component44426({ value = 44426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44426, 'data-value': derived.doubled }, children);
}
export default Component44426;
