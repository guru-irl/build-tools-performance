import React from 'react';
const LABEL_43993 = 'component_43993';
export function Component43993({ value = 43993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43993, 'data-value': derived.doubled }, children);
}
export default Component43993;
