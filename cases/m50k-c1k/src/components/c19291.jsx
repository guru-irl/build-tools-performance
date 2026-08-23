import React from 'react';
const LABEL_19291 = 'component_19291';
export function Component19291({ value = 19291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19291, 'data-value': derived.doubled }, children);
}
export default Component19291;
