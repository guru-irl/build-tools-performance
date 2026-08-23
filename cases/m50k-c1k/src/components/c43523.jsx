import React from 'react';
const LABEL_43523 = 'component_43523';
export function Component43523({ value = 43523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43523, 'data-value': derived.doubled }, children);
}
export default Component43523;
