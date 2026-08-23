import React from 'react';
const LABEL_19285 = 'component_19285';
export function Component19285({ value = 19285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19285, 'data-value': derived.doubled }, children);
}
export default Component19285;
