import React from 'react';
const LABEL_26575 = 'component_26575';
export function Component26575({ value = 26575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26575, 'data-value': derived.doubled }, children);
}
export default Component26575;
