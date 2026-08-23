import React from 'react';
const LABEL_46049 = 'component_46049';
export function Component46049({ value = 46049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46049, 'data-value': derived.doubled }, children);
}
export default Component46049;
