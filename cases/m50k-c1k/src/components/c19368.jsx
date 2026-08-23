import React from 'react';
const LABEL_19368 = 'component_19368';
export function Component19368({ value = 19368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19368, 'data-value': derived.doubled }, children);
}
export default Component19368;
