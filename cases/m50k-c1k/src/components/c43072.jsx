import React from 'react';
const LABEL_43072 = 'component_43072';
export function Component43072({ value = 43072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43072, 'data-value': derived.doubled }, children);
}
export default Component43072;
