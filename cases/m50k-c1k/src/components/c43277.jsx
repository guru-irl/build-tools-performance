import React from 'react';
const LABEL_43277 = 'component_43277';
export function Component43277({ value = 43277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43277, 'data-value': derived.doubled }, children);
}
export default Component43277;
