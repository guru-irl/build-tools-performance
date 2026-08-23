import React from 'react';
const LABEL_6675 = 'component_6675';
export function Component6675({ value = 6675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6675, 'data-value': derived.doubled }, children);
}
export default Component6675;
