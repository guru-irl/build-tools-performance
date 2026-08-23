import React from 'react';
const LABEL_43349 = 'component_43349';
export function Component43349({ value = 43349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43349, 'data-value': derived.doubled }, children);
}
export default Component43349;
