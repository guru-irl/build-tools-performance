import React from 'react';
const LABEL_46271 = 'component_46271';
export function Component46271({ value = 46271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46271, 'data-value': derived.doubled }, children);
}
export default Component46271;
