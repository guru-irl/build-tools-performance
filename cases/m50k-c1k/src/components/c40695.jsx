import React from 'react';
const LABEL_40695 = 'component_40695';
export function Component40695({ value = 40695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40695, 'data-value': derived.doubled }, children);
}
export default Component40695;
