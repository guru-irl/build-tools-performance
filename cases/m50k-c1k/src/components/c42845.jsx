import React from 'react';
const LABEL_42845 = 'component_42845';
export function Component42845({ value = 42845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42845, 'data-value': derived.doubled }, children);
}
export default Component42845;
