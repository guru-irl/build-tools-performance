import React from 'react';
const LABEL_695 = 'component_695';
export function Component695({ value = 695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_695, 'data-value': derived.doubled }, children);
}
export default Component695;
