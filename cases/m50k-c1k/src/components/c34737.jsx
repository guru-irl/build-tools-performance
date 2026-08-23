import React from 'react';
const LABEL_34737 = 'component_34737';
export function Component34737({ value = 34737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34737, 'data-value': derived.doubled }, children);
}
export default Component34737;
