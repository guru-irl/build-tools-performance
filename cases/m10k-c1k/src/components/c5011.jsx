import React from 'react';
const LABEL_5011 = 'component_5011';
export function Component5011({ value = 5011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5011, 'data-value': derived.doubled }, children);
}
export default Component5011;
