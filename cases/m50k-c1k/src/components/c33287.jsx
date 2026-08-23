import React from 'react';
const LABEL_33287 = 'component_33287';
export function Component33287({ value = 33287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33287, 'data-value': derived.doubled }, children);
}
export default Component33287;
