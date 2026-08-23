import React from 'react';
const LABEL_1182 = 'component_1182';
export function Component1182({ value = 1182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1182, 'data-value': derived.doubled }, children);
}
export default Component1182;
