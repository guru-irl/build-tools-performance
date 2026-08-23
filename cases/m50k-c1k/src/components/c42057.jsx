import React from 'react';
const LABEL_42057 = 'component_42057';
export function Component42057({ value = 42057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42057, 'data-value': derived.doubled }, children);
}
export default Component42057;
