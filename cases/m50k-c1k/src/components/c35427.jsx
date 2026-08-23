import React from 'react';
const LABEL_35427 = 'component_35427';
export function Component35427({ value = 35427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35427, 'data-value': derived.doubled }, children);
}
export default Component35427;
