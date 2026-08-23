import React from 'react';
const LABEL_39704 = 'component_39704';
export function Component39704({ value = 39704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39704, 'data-value': derived.doubled }, children);
}
export default Component39704;
