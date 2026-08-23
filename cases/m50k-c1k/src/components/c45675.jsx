import React from 'react';
const LABEL_45675 = 'component_45675';
export function Component45675({ value = 45675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45675, 'data-value': derived.doubled }, children);
}
export default Component45675;
