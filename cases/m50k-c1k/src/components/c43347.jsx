import React from 'react';
const LABEL_43347 = 'component_43347';
export function Component43347({ value = 43347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43347, 'data-value': derived.doubled }, children);
}
export default Component43347;
