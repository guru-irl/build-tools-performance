import React from 'react';
const LABEL_38399 = 'component_38399';
export function Component38399({ value = 38399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38399, 'data-value': derived.doubled }, children);
}
export default Component38399;
