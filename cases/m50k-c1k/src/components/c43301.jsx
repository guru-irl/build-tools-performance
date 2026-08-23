import React from 'react';
const LABEL_43301 = 'component_43301';
export function Component43301({ value = 43301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43301, 'data-value': derived.doubled }, children);
}
export default Component43301;
