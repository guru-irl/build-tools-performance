import React from 'react';
const LABEL_42760 = 'component_42760';
export function Component42760({ value = 42760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42760, 'data-value': derived.doubled }, children);
}
export default Component42760;
