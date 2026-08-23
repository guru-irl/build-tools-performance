import React from 'react';
const LABEL_19760 = 'component_19760';
export function Component19760({ value = 19760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19760, 'data-value': derived.doubled }, children);
}
export default Component19760;
