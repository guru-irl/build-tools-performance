import React from 'react';
const LABEL_195 = 'component_195';
export function Component195({ value = 195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_195, 'data-value': derived.doubled }, children);
}
export default Component195;
