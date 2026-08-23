import React from 'react';
const LABEL_31845 = 'component_31845';
export function Component31845({ value = 31845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31845, 'data-value': derived.doubled }, children);
}
export default Component31845;
