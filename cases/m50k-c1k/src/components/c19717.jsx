import React from 'react';
const LABEL_19717 = 'component_19717';
export function Component19717({ value = 19717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19717, 'data-value': derived.doubled }, children);
}
export default Component19717;
