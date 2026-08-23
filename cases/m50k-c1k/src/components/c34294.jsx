import React from 'react';
const LABEL_34294 = 'component_34294';
export function Component34294({ value = 34294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34294, 'data-value': derived.doubled }, children);
}
export default Component34294;
