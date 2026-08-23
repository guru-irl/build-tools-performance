import React from 'react';
const LABEL_4034 = 'component_4034';
export function Component4034({ value = 4034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4034, 'data-value': derived.doubled }, children);
}
export default Component4034;
