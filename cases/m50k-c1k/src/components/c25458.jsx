import React from 'react';
const LABEL_25458 = 'component_25458';
export function Component25458({ value = 25458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25458, 'data-value': derived.doubled }, children);
}
export default Component25458;
