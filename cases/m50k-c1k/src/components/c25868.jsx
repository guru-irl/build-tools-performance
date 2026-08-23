import React from 'react';
const LABEL_25868 = 'component_25868';
export function Component25868({ value = 25868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25868, 'data-value': derived.doubled }, children);
}
export default Component25868;
