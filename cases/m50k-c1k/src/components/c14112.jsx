import React from 'react';
const LABEL_14112 = 'component_14112';
export function Component14112({ value = 14112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14112, 'data-value': derived.doubled }, children);
}
export default Component14112;
