import React from 'react';
const LABEL_35636 = 'component_35636';
export function Component35636({ value = 35636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35636, 'data-value': derived.doubled }, children);
}
export default Component35636;
