import React from 'react';
const LABEL_43892 = 'component_43892';
export function Component43892({ value = 43892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43892, 'data-value': derived.doubled }, children);
}
export default Component43892;
