import React from 'react';
const LABEL_45118 = 'component_45118';
export function Component45118({ value = 45118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45118, 'data-value': derived.doubled }, children);
}
export default Component45118;
