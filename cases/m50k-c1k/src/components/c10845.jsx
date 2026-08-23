import React from 'react';
const LABEL_10845 = 'component_10845';
export function Component10845({ value = 10845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10845, 'data-value': derived.doubled }, children);
}
export default Component10845;
