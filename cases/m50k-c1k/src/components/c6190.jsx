import React from 'react';
const LABEL_6190 = 'component_6190';
export function Component6190({ value = 6190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6190, 'data-value': derived.doubled }, children);
}
export default Component6190;
