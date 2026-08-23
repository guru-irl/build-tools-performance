import React from 'react';
const LABEL_34777 = 'component_34777';
export function Component34777({ value = 34777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34777, 'data-value': derived.doubled }, children);
}
export default Component34777;
