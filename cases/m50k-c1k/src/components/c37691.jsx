import React from 'react';
const LABEL_37691 = 'component_37691';
export function Component37691({ value = 37691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37691, 'data-value': derived.doubled }, children);
}
export default Component37691;
