import React from 'react';
const LABEL_8293 = 'component_8293';
export function Component8293({ value = 8293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8293, 'data-value': derived.doubled }, children);
}
export default Component8293;
