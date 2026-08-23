import React from 'react';
const LABEL_36199 = 'component_36199';
export function Component36199({ value = 36199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36199, 'data-value': derived.doubled }, children);
}
export default Component36199;
