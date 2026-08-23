import React from 'react';
const LABEL_38009 = 'component_38009';
export function Component38009({ value = 38009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38009, 'data-value': derived.doubled }, children);
}
export default Component38009;
