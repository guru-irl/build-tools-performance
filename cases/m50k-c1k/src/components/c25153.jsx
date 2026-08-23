import React from 'react';
const LABEL_25153 = 'component_25153';
export function Component25153({ value = 25153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25153, 'data-value': derived.doubled }, children);
}
export default Component25153;
