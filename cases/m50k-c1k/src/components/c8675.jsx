import React from 'react';
const LABEL_8675 = 'component_8675';
export function Component8675({ value = 8675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8675, 'data-value': derived.doubled }, children);
}
export default Component8675;
