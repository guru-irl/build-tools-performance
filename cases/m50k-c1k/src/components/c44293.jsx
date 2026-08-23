import React from 'react';
const LABEL_44293 = 'component_44293';
export function Component44293({ value = 44293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44293, 'data-value': derived.doubled }, children);
}
export default Component44293;
