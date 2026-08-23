import React from 'react';
const LABEL_25547 = 'component_25547';
export function Component25547({ value = 25547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25547, 'data-value': derived.doubled }, children);
}
export default Component25547;
