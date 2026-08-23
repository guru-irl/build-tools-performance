import React from 'react';
const LABEL_15270 = 'component_15270';
export function Component15270({ value = 15270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15270, 'data-value': derived.doubled }, children);
}
export default Component15270;
