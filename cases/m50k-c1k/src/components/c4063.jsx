import React from 'react';
const LABEL_4063 = 'component_4063';
export function Component4063({ value = 4063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4063, 'data-value': derived.doubled }, children);
}
export default Component4063;
