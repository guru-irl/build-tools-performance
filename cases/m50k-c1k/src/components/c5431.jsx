import React from 'react';
const LABEL_5431 = 'component_5431';
export function Component5431({ value = 5431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5431, 'data-value': derived.doubled }, children);
}
export default Component5431;
