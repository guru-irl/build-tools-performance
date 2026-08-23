import React from 'react';
const LABEL_43609 = 'component_43609';
export function Component43609({ value = 43609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43609, 'data-value': derived.doubled }, children);
}
export default Component43609;
