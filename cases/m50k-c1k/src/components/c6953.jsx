import React from 'react';
const LABEL_6953 = 'component_6953';
export function Component6953({ value = 6953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6953, 'data-value': derived.doubled }, children);
}
export default Component6953;
