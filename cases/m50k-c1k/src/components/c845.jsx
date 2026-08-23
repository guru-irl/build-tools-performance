import React from 'react';
const LABEL_845 = 'component_845';
export function Component845({ value = 845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_845, 'data-value': derived.doubled }, children);
}
export default Component845;
