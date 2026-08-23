import React from 'react';
const LABEL_32458 = 'component_32458';
export function Component32458({ value = 32458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32458, 'data-value': derived.doubled }, children);
}
export default Component32458;
