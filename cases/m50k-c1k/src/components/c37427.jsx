import React from 'react';
const LABEL_37427 = 'component_37427';
export function Component37427({ value = 37427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37427, 'data-value': derived.doubled }, children);
}
export default Component37427;
