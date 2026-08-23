import React from 'react';
const LABEL_34835 = 'component_34835';
export function Component34835({ value = 34835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34835, 'data-value': derived.doubled }, children);
}
export default Component34835;
