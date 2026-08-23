import React from 'react';
const LABEL_34036 = 'component_34036';
export function Component34036({ value = 34036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34036, 'data-value': derived.doubled }, children);
}
export default Component34036;
