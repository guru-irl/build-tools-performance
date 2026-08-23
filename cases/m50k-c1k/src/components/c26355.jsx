import React from 'react';
const LABEL_26355 = 'component_26355';
export function Component26355({ value = 26355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26355, 'data-value': derived.doubled }, children);
}
export default Component26355;
