import React from 'react';
const LABEL_34458 = 'component_34458';
export function Component34458({ value = 34458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34458, 'data-value': derived.doubled }, children);
}
export default Component34458;
