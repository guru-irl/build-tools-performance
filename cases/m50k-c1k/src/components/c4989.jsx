import React from 'react';
const LABEL_4989 = 'component_4989';
export function Component4989({ value = 4989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4989, 'data-value': derived.doubled }, children);
}
export default Component4989;
