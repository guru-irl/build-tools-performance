import React from 'react';
const LABEL_42426 = 'component_42426';
export function Component42426({ value = 42426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42426, 'data-value': derived.doubled }, children);
}
export default Component42426;
