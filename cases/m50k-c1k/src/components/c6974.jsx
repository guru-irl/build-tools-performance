import React from 'react';
const LABEL_6974 = 'component_6974';
export function Component6974({ value = 6974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6974, 'data-value': derived.doubled }, children);
}
export default Component6974;
