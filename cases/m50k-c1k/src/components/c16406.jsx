import React from 'react';
const LABEL_16406 = 'component_16406';
export function Component16406({ value = 16406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16406, 'data-value': derived.doubled }, children);
}
export default Component16406;
