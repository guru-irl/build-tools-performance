import React from 'react';
const LABEL_43220 = 'component_43220';
export function Component43220({ value = 43220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43220, 'data-value': derived.doubled }, children);
}
export default Component43220;
