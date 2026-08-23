import React from 'react';
const LABEL_46515 = 'component_46515';
export function Component46515({ value = 46515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46515, 'data-value': derived.doubled }, children);
}
export default Component46515;
