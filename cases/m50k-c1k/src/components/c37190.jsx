import React from 'react';
const LABEL_37190 = 'component_37190';
export function Component37190({ value = 37190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37190, 'data-value': derived.doubled }, children);
}
export default Component37190;
