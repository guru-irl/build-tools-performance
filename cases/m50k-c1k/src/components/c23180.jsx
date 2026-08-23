import React from 'react';
const LABEL_23180 = 'component_23180';
export function Component23180({ value = 23180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23180, 'data-value': derived.doubled }, children);
}
export default Component23180;
