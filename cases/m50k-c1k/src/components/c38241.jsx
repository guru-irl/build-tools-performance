import React from 'react';
const LABEL_38241 = 'component_38241';
export function Component38241({ value = 38241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38241, 'data-value': derived.doubled }, children);
}
export default Component38241;
