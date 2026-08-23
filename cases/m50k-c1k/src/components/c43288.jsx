import React from 'react';
const LABEL_43288 = 'component_43288';
export function Component43288({ value = 43288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43288, 'data-value': derived.doubled }, children);
}
export default Component43288;
