import React from 'react';
const LABEL_28737 = 'component_28737';
export function Component28737({ value = 28737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28737, 'data-value': derived.doubled }, children);
}
export default Component28737;
