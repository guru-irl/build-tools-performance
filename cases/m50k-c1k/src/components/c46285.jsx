import React from 'react';
const LABEL_46285 = 'component_46285';
export function Component46285({ value = 46285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46285, 'data-value': derived.doubled }, children);
}
export default Component46285;
