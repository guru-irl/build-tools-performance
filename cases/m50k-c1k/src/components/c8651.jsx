import React from 'react';
const LABEL_8651 = 'component_8651';
export function Component8651({ value = 8651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8651, 'data-value': derived.doubled }, children);
}
export default Component8651;
