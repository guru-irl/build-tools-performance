import React from 'react';
const LABEL_34620 = 'component_34620';
export function Component34620({ value = 34620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34620, 'data-value': derived.doubled }, children);
}
export default Component34620;
