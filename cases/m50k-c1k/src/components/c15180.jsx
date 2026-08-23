import React from 'react';
const LABEL_15180 = 'component_15180';
export function Component15180({ value = 15180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15180, 'data-value': derived.doubled }, children);
}
export default Component15180;
