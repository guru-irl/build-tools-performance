import React from 'react';
const LABEL_18760 = 'component_18760';
export function Component18760({ value = 18760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18760, 'data-value': derived.doubled }, children);
}
export default Component18760;
