import React from 'react';
const LABEL_45640 = 'component_45640';
export function Component45640({ value = 45640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45640, 'data-value': derived.doubled }, children);
}
export default Component45640;
