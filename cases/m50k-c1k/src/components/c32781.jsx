import React from 'react';
const LABEL_32781 = 'component_32781';
export function Component32781({ value = 32781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32781, 'data-value': derived.doubled }, children);
}
export default Component32781;
