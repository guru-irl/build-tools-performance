import React from 'react';
const LABEL_14675 = 'component_14675';
export function Component14675({ value = 14675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14675, 'data-value': derived.doubled }, children);
}
export default Component14675;
