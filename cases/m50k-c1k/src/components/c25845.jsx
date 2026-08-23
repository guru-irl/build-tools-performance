import React from 'react';
const LABEL_25845 = 'component_25845';
export function Component25845({ value = 25845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25845, 'data-value': derived.doubled }, children);
}
export default Component25845;
