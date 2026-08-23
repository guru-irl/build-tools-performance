import React from 'react';
const LABEL_34011 = 'component_34011';
export function Component34011({ value = 34011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34011, 'data-value': derived.doubled }, children);
}
export default Component34011;
