import React from 'react';
const LABEL_16737 = 'component_16737';
export function Component16737({ value = 16737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16737, 'data-value': derived.doubled }, children);
}
export default Component16737;
