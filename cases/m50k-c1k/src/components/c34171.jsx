import React from 'react';
const LABEL_34171 = 'component_34171';
export function Component34171({ value = 34171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34171, 'data-value': derived.doubled }, children);
}
export default Component34171;
