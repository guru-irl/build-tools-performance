import React from 'react';
const LABEL_35138 = 'component_35138';
export function Component35138({ value = 35138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35138, 'data-value': derived.doubled }, children);
}
export default Component35138;
