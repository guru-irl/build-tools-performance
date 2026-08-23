import React from 'react';
const LABEL_18493 = 'component_18493';
export function Component18493({ value = 18493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18493, 'data-value': derived.doubled }, children);
}
export default Component18493;
