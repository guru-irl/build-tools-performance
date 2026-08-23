import React from 'react';
const LABEL_4760 = 'component_4760';
export function Component4760({ value = 4760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4760, 'data-value': derived.doubled }, children);
}
export default Component4760;
