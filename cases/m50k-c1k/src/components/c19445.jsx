import React from 'react';
const LABEL_19445 = 'component_19445';
export function Component19445({ value = 19445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19445, 'data-value': derived.doubled }, children);
}
export default Component19445;
