import React from 'react';
const LABEL_23953 = 'component_23953';
export function Component23953({ value = 23953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23953, 'data-value': derived.doubled }, children);
}
export default Component23953;
