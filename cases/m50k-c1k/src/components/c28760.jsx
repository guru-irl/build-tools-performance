import React from 'react';
const LABEL_28760 = 'component_28760';
export function Component28760({ value = 28760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28760, 'data-value': derived.doubled }, children);
}
export default Component28760;
