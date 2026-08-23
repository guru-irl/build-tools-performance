import React from 'react';
const LABEL_18254 = 'component_18254';
export function Component18254({ value = 18254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18254, 'data-value': derived.doubled }, children);
}
export default Component18254;
