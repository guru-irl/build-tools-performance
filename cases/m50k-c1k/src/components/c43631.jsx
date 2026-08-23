import React from 'react';
const LABEL_43631 = 'component_43631';
export function Component43631({ value = 43631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43631, 'data-value': derived.doubled }, children);
}
export default Component43631;
