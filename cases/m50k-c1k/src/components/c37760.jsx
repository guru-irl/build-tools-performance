import React from 'react';
const LABEL_37760 = 'component_37760';
export function Component37760({ value = 37760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37760, 'data-value': derived.doubled }, children);
}
export default Component37760;
