import React from 'react';
const LABEL_34000 = 'component_34000';
export function Component34000({ value = 34000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34000, 'data-value': derived.doubled }, children);
}
export default Component34000;
