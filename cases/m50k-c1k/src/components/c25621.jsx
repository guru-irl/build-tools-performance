import React from 'react';
const LABEL_25621 = 'component_25621';
export function Component25621({ value = 25621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25621, 'data-value': derived.doubled }, children);
}
export default Component25621;
