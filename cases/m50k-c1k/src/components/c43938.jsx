import React from 'react';
const LABEL_43938 = 'component_43938';
export function Component43938({ value = 43938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43938, 'data-value': derived.doubled }, children);
}
export default Component43938;
