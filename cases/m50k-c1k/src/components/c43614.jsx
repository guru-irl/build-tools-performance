import React from 'react';
const LABEL_43614 = 'component_43614';
export function Component43614({ value = 43614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43614, 'data-value': derived.doubled }, children);
}
export default Component43614;
