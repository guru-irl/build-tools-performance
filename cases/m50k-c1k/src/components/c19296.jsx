import React from 'react';
const LABEL_19296 = 'component_19296';
export function Component19296({ value = 19296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19296, 'data-value': derived.doubled }, children);
}
export default Component19296;
