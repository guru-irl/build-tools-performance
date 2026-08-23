import React from 'react';
const LABEL_6232 = 'component_6232';
export function Component6232({ value = 6232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6232, 'data-value': derived.doubled }, children);
}
export default Component6232;
