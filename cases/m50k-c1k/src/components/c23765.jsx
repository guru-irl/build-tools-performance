import React from 'react';
const LABEL_23765 = 'component_23765';
export function Component23765({ value = 23765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23765, 'data-value': derived.doubled }, children);
}
export default Component23765;
