import React from 'react';
const LABEL_29388 = 'component_29388';
export function Component29388({ value = 29388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29388, 'data-value': derived.doubled }, children);
}
export default Component29388;
