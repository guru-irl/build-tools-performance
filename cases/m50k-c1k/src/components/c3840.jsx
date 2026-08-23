import React from 'react';
const LABEL_3840 = 'component_3840';
export function Component3840({ value = 3840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3840, 'data-value': derived.doubled }, children);
}
export default Component3840;
