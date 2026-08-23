import React from 'react';
const LABEL_19740 = 'component_19740';
export function Component19740({ value = 19740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19740, 'data-value': derived.doubled }, children);
}
export default Component19740;
