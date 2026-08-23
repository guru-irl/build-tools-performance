import React from 'react';
const LABEL_40408 = 'component_40408';
export function Component40408({ value = 40408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40408, 'data-value': derived.doubled }, children);
}
export default Component40408;
