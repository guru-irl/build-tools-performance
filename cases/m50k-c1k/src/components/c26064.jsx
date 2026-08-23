import React from 'react';
const LABEL_26064 = 'component_26064';
export function Component26064({ value = 26064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26064, 'data-value': derived.doubled }, children);
}
export default Component26064;
