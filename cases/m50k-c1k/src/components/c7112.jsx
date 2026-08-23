import React from 'react';
const LABEL_7112 = 'component_7112';
export function Component7112({ value = 7112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7112, 'data-value': derived.doubled }, children);
}
export default Component7112;
