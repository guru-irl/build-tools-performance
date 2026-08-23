import React from 'react';
const LABEL_43216 = 'component_43216';
export function Component43216({ value = 43216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43216, 'data-value': derived.doubled }, children);
}
export default Component43216;
