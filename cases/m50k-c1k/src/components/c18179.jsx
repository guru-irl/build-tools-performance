import React from 'react';
const LABEL_18179 = 'component_18179';
export function Component18179({ value = 18179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18179, 'data-value': derived.doubled }, children);
}
export default Component18179;
