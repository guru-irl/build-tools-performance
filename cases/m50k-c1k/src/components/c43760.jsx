import React from 'react';
const LABEL_43760 = 'component_43760';
export function Component43760({ value = 43760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43760, 'data-value': derived.doubled }, children);
}
export default Component43760;
