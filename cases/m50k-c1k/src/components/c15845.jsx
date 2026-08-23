import React from 'react';
const LABEL_15845 = 'component_15845';
export function Component15845({ value = 15845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15845, 'data-value': derived.doubled }, children);
}
export default Component15845;
