import React from 'react';
const LABEL_38506 = 'component_38506';
export function Component38506({ value = 38506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38506, 'data-value': derived.doubled }, children);
}
export default Component38506;
