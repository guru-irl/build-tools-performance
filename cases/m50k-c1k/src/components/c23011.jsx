import React from 'react';
const LABEL_23011 = 'component_23011';
export function Component23011({ value = 23011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23011, 'data-value': derived.doubled }, children);
}
export default Component23011;
