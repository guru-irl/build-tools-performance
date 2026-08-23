import React from 'react';
const LABEL_37431 = 'component_37431';
export function Component37431({ value = 37431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37431, 'data-value': derived.doubled }, children);
}
export default Component37431;
