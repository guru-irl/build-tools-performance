import React from 'react';
const LABEL_20587 = 'component_20587';
export function Component20587({ value = 20587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20587, 'data-value': derived.doubled }, children);
}
export default Component20587;
