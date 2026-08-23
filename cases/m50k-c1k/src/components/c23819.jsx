import React from 'react';
const LABEL_23819 = 'component_23819';
export function Component23819({ value = 23819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23819, 'data-value': derived.doubled }, children);
}
export default Component23819;
