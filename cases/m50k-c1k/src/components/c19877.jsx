import React from 'react';
const LABEL_19877 = 'component_19877';
export function Component19877({ value = 19877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19877, 'data-value': derived.doubled }, children);
}
export default Component19877;
