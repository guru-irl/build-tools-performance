import React from 'react';
const LABEL_38573 = 'component_38573';
export function Component38573({ value = 38573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38573, 'data-value': derived.doubled }, children);
}
export default Component38573;
