import React from 'react';
const LABEL_31097 = 'component_31097';
export function Component31097({ value = 31097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31097, 'data-value': derived.doubled }, children);
}
export default Component31097;
