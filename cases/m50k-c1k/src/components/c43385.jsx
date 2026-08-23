import React from 'react';
const LABEL_43385 = 'component_43385';
export function Component43385({ value = 43385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43385, 'data-value': derived.doubled }, children);
}
export default Component43385;
