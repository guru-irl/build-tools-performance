import React from 'react';
const LABEL_29468 = 'component_29468';
export function Component29468({ value = 29468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29468, 'data-value': derived.doubled }, children);
}
export default Component29468;
