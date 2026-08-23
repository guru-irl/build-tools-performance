import React from 'react';
const LABEL_7760 = 'component_7760';
export function Component7760({ value = 7760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7760, 'data-value': derived.doubled }, children);
}
export default Component7760;
