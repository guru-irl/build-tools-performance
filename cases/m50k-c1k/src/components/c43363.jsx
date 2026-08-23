import React from 'react';
const LABEL_43363 = 'component_43363';
export function Component43363({ value = 43363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43363, 'data-value': derived.doubled }, children);
}
export default Component43363;
