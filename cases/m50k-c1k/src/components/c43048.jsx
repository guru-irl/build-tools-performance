import React from 'react';
const LABEL_43048 = 'component_43048';
export function Component43048({ value = 43048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43048, 'data-value': derived.doubled }, children);
}
export default Component43048;
