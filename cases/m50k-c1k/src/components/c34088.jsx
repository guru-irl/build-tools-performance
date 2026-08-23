import React from 'react';
const LABEL_34088 = 'component_34088';
export function Component34088({ value = 34088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34088, 'data-value': derived.doubled }, children);
}
export default Component34088;
