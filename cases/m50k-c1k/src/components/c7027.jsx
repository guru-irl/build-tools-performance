import React from 'react';
const LABEL_7027 = 'component_7027';
export function Component7027({ value = 7027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7027, 'data-value': derived.doubled }, children);
}
export default Component7027;
