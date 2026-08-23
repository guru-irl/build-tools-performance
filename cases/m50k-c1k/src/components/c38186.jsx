import React from 'react';
const LABEL_38186 = 'component_38186';
export function Component38186({ value = 38186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38186, 'data-value': derived.doubled }, children);
}
export default Component38186;
