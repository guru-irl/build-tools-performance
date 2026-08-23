import React from 'react';
const LABEL_4880 = 'component_4880';
export function Component4880({ value = 4880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4880, 'data-value': derived.doubled }, children);
}
export default Component4880;
