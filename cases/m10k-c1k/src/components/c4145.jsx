import React from 'react';
const LABEL_4145 = 'component_4145';
export function Component4145({ value = 4145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4145, 'data-value': derived.doubled }, children);
}
export default Component4145;
