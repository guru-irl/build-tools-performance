import React from 'react';
const LABEL_34563 = 'component_34563';
export function Component34563({ value = 34563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34563, 'data-value': derived.doubled }, children);
}
export default Component34563;
