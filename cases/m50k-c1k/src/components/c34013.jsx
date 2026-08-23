import React from 'react';
const LABEL_34013 = 'component_34013';
export function Component34013({ value = 34013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34013, 'data-value': derived.doubled }, children);
}
export default Component34013;
