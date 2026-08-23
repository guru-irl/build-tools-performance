import React from 'react';
const LABEL_43121 = 'component_43121';
export function Component43121({ value = 43121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43121, 'data-value': derived.doubled }, children);
}
export default Component43121;
