import React from 'react';
const LABEL_28064 = 'component_28064';
export function Component28064({ value = 28064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28064, 'data-value': derived.doubled }, children);
}
export default Component28064;
