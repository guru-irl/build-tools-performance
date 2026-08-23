import React from 'react';
const LABEL_46690 = 'component_46690';
export function Component46690({ value = 46690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46690, 'data-value': derived.doubled }, children);
}
export default Component46690;
