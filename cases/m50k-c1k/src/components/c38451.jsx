import React from 'react';
const LABEL_38451 = 'component_38451';
export function Component38451({ value = 38451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38451, 'data-value': derived.doubled }, children);
}
export default Component38451;
