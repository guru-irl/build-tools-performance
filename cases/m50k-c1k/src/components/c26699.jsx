import React from 'react';
const LABEL_26699 = 'component_26699';
export function Component26699({ value = 26699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26699, 'data-value': derived.doubled }, children);
}
export default Component26699;
