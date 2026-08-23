import React from 'react';
const LABEL_26543 = 'component_26543';
export function Component26543({ value = 26543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26543, 'data-value': derived.doubled }, children);
}
export default Component26543;
