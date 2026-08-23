import React from 'react';
const LABEL_38845 = 'component_38845';
export function Component38845({ value = 38845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38845, 'data-value': derived.doubled }, children);
}
export default Component38845;
