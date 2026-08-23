import React from 'react';
const LABEL_43331 = 'component_43331';
export function Component43331({ value = 43331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43331, 'data-value': derived.doubled }, children);
}
export default Component43331;
