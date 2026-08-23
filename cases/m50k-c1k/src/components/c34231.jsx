import React from 'react';
const LABEL_34231 = 'component_34231';
export function Component34231({ value = 34231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34231, 'data-value': derived.doubled }, children);
}
export default Component34231;
