import React from 'react';
const LABEL_18845 = 'component_18845';
export function Component18845({ value = 18845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18845, 'data-value': derived.doubled }, children);
}
export default Component18845;
