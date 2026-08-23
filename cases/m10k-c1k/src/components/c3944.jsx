import React from 'react';
const LABEL_3944 = 'component_3944';
export function Component3944({ value = 3944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3944, 'data-value': derived.doubled }, children);
}
export default Component3944;
