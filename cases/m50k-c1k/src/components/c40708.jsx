import React from 'react';
const LABEL_40708 = 'component_40708';
export function Component40708({ value = 40708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40708, 'data-value': derived.doubled }, children);
}
export default Component40708;
