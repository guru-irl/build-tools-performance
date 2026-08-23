import React from 'react';
const LABEL_43207 = 'component_43207';
export function Component43207({ value = 43207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43207, 'data-value': derived.doubled }, children);
}
export default Component43207;
