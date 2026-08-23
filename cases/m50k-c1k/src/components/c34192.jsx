import React from 'react';
const LABEL_34192 = 'component_34192';
export function Component34192({ value = 34192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34192, 'data-value': derived.doubled }, children);
}
export default Component34192;
