import React from 'react';
const LABEL_43569 = 'component_43569';
export function Component43569({ value = 43569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43569, 'data-value': derived.doubled }, children);
}
export default Component43569;
