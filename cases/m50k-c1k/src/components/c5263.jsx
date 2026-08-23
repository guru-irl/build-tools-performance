import React from 'react';
const LABEL_5263 = 'component_5263';
export function Component5263({ value = 5263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5263, 'data-value': derived.doubled }, children);
}
export default Component5263;
