import React from 'react';
const LABEL_43586 = 'component_43586';
export function Component43586({ value = 43586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43586, 'data-value': derived.doubled }, children);
}
export default Component43586;
