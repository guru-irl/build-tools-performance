import React from 'react';
const LABEL_36845 = 'component_36845';
export function Component36845({ value = 36845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36845, 'data-value': derived.doubled }, children);
}
export default Component36845;
