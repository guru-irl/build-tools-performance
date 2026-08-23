import React from 'react';
const LABEL_13493 = 'component_13493';
export function Component13493({ value = 13493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13493, 'data-value': derived.doubled }, children);
}
export default Component13493;
