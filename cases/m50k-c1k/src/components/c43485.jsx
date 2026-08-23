import React from 'react';
const LABEL_43485 = 'component_43485';
export function Component43485({ value = 43485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43485, 'data-value': derived.doubled }, children);
}
export default Component43485;
