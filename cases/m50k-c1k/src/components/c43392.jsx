import React from 'react';
const LABEL_43392 = 'component_43392';
export function Component43392({ value = 43392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43392, 'data-value': derived.doubled }, children);
}
export default Component43392;
