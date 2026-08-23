import React from 'react';
const LABEL_19611 = 'component_19611';
export function Component19611({ value = 19611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19611, 'data-value': derived.doubled }, children);
}
export default Component19611;
