import React from 'react';
const LABEL_43621 = 'component_43621';
export function Component43621({ value = 43621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43621, 'data-value': derived.doubled }, children);
}
export default Component43621;
