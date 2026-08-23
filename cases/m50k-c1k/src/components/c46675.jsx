import React from 'react';
const LABEL_46675 = 'component_46675';
export function Component46675({ value = 46675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46675, 'data-value': derived.doubled }, children);
}
export default Component46675;
