import React from 'react';
const LABEL_19145 = 'component_19145';
export function Component19145({ value = 19145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19145, 'data-value': derived.doubled }, children);
}
export default Component19145;
