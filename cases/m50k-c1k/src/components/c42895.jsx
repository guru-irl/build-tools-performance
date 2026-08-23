import React from 'react';
const LABEL_42895 = 'component_42895';
export function Component42895({ value = 42895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42895, 'data-value': derived.doubled }, children);
}
export default Component42895;
