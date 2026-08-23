import React from 'react';
const LABEL_34515 = 'component_34515';
export function Component34515({ value = 34515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34515, 'data-value': derived.doubled }, children);
}
export default Component34515;
