import React from 'react';
const LABEL_6406 = 'component_6406';
export function Component6406({ value = 6406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6406, 'data-value': derived.doubled }, children);
}
export default Component6406;
