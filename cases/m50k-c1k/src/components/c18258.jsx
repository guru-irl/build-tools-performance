import React from 'react';
const LABEL_18258 = 'component_18258';
export function Component18258({ value = 18258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18258, 'data-value': derived.doubled }, children);
}
export default Component18258;
