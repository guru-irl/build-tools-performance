import React from 'react';
const LABEL_26508 = 'component_26508';
export function Component26508({ value = 26508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26508, 'data-value': derived.doubled }, children);
}
export default Component26508;
