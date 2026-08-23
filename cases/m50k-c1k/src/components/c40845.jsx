import React from 'react';
const LABEL_40845 = 'component_40845';
export function Component40845({ value = 40845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40845, 'data-value': derived.doubled }, children);
}
export default Component40845;
