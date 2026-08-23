import React from 'react';
const LABEL_19525 = 'component_19525';
export function Component19525({ value = 19525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19525, 'data-value': derived.doubled }, children);
}
export default Component19525;
