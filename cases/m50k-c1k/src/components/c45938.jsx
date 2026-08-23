import React from 'react';
const LABEL_45938 = 'component_45938';
export function Component45938({ value = 45938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45938, 'data-value': derived.doubled }, children);
}
export default Component45938;
