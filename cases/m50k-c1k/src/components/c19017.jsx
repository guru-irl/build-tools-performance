import React from 'react';
const LABEL_19017 = 'component_19017';
export function Component19017({ value = 19017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19017, 'data-value': derived.doubled }, children);
}
export default Component19017;
