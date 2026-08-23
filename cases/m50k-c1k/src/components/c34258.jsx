import React from 'react';
const LABEL_34258 = 'component_34258';
export function Component34258({ value = 34258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34258, 'data-value': derived.doubled }, children);
}
export default Component34258;
