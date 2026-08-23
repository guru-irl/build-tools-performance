import React from 'react';
const LABEL_6855 = 'component_6855';
export function Component6855({ value = 6855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6855, 'data-value': derived.doubled }, children);
}
export default Component6855;
