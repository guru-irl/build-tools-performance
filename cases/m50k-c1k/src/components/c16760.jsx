import React from 'react';
const LABEL_16760 = 'component_16760';
export function Component16760({ value = 16760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16760, 'data-value': derived.doubled }, children);
}
export default Component16760;
