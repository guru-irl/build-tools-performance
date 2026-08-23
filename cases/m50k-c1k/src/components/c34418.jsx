import React from 'react';
const LABEL_34418 = 'component_34418';
export function Component34418({ value = 34418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34418, 'data-value': derived.doubled }, children);
}
export default Component34418;
