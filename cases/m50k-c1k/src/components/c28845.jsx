import React from 'react';
const LABEL_28845 = 'component_28845';
export function Component28845({ value = 28845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28845, 'data-value': derived.doubled }, children);
}
export default Component28845;
