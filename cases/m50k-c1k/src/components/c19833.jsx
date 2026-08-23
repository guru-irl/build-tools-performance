import React from 'react';
const LABEL_19833 = 'component_19833';
export function Component19833({ value = 19833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19833, 'data-value': derived.doubled }, children);
}
export default Component19833;
