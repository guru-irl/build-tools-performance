import React from 'react';
const LABEL_38011 = 'component_38011';
export function Component38011({ value = 38011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38011, 'data-value': derived.doubled }, children);
}
export default Component38011;
