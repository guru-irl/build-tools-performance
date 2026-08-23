import React from 'react';
const LABEL_36112 = 'component_36112';
export function Component36112({ value = 36112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36112, 'data-value': derived.doubled }, children);
}
export default Component36112;
