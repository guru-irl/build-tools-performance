import React from 'react';
const LABEL_34845 = 'component_34845';
export function Component34845({ value = 34845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34845, 'data-value': derived.doubled }, children);
}
export default Component34845;
