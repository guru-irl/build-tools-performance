import React from 'react';
const LABEL_46871 = 'component_46871';
export function Component46871({ value = 46871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46871, 'data-value': derived.doubled }, children);
}
export default Component46871;
