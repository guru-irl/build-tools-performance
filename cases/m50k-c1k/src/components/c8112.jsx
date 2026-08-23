import React from 'react';
const LABEL_8112 = 'component_8112';
export function Component8112({ value = 8112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8112, 'data-value': derived.doubled }, children);
}
export default Component8112;
