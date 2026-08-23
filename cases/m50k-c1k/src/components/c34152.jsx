import React from 'react';
const LABEL_34152 = 'component_34152';
export function Component34152({ value = 34152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34152, 'data-value': derived.doubled }, children);
}
export default Component34152;
