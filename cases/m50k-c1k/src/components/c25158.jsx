import React from 'react';
const LABEL_25158 = 'component_25158';
export function Component25158({ value = 25158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25158, 'data-value': derived.doubled }, children);
}
export default Component25158;
