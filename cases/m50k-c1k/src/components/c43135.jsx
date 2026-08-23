import React from 'react';
const LABEL_43135 = 'component_43135';
export function Component43135({ value = 43135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43135, 'data-value': derived.doubled }, children);
}
export default Component43135;
