import React from 'react';
const LABEL_7180 = 'component_7180';
export function Component7180({ value = 7180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7180, 'data-value': derived.doubled }, children);
}
export default Component7180;
