import React from 'react';
const LABEL_15587 = 'component_15587';
export function Component15587({ value = 15587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15587, 'data-value': derived.doubled }, children);
}
export default Component15587;
