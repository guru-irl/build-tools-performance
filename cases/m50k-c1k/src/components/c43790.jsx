import React from 'react';
const LABEL_43790 = 'component_43790';
export function Component43790({ value = 43790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43790, 'data-value': derived.doubled }, children);
}
export default Component43790;
