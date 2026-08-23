import React from 'react';
const LABEL_44171 = 'component_44171';
export function Component44171({ value = 44171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44171, 'data-value': derived.doubled }, children);
}
export default Component44171;
