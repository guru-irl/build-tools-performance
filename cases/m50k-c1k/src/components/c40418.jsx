import React from 'react';
const LABEL_40418 = 'component_40418';
export function Component40418({ value = 40418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40418, 'data-value': derived.doubled }, children);
}
export default Component40418;
