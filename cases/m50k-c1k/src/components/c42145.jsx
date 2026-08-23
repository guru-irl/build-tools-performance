import React from 'react';
const LABEL_42145 = 'component_42145';
export function Component42145({ value = 42145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42145, 'data-value': derived.doubled }, children);
}
export default Component42145;
