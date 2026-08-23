import React from 'react';
const LABEL_34263 = 'component_34263';
export function Component34263({ value = 34263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34263, 'data-value': derived.doubled }, children);
}
export default Component34263;
