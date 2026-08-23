import React from 'react';
const LABEL_37868 = 'component_37868';
export function Component37868({ value = 37868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37868, 'data-value': derived.doubled }, children);
}
export default Component37868;
