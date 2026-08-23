import React from 'react';
const LABEL_32066 = 'component_32066';
export function Component32066({ value = 32066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32066, 'data-value': derived.doubled }, children);
}
export default Component32066;
