import React from 'react';
const LABEL_43927 = 'component_43927';
export function Component43927({ value = 43927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43927, 'data-value': derived.doubled }, children);
}
export default Component43927;
