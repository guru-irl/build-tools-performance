import React from 'react';
const LABEL_3655 = 'component_3655';
export function Component3655({ value = 3655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3655, 'data-value': derived.doubled }, children);
}
export default Component3655;
