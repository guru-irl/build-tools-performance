import React from 'react';
const LABEL_42206 = 'component_42206';
export function Component42206({ value = 42206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42206, 'data-value': derived.doubled }, children);
}
export default Component42206;
