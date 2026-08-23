import React from 'react';
const LABEL_6523 = 'component_6523';
export function Component6523({ value = 6523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6523, 'data-value': derived.doubled }, children);
}
export default Component6523;
