import React from 'react';
const LABEL_34033 = 'component_34033';
export function Component34033({ value = 34033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34033, 'data-value': derived.doubled }, children);
}
export default Component34033;
