import React from 'react';
const LABEL_6472 = 'component_6472';
export function Component6472({ value = 6472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6472, 'data-value': derived.doubled }, children);
}
export default Component6472;
