import React from 'react';
const LABEL_34982 = 'component_34982';
export function Component34982({ value = 34982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34982, 'data-value': derived.doubled }, children);
}
export default Component34982;
