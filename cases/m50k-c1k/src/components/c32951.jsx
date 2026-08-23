import React from 'react';
const LABEL_32951 = 'component_32951';
export function Component32951({ value = 32951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32951, 'data-value': derived.doubled }, children);
}
export default Component32951;
