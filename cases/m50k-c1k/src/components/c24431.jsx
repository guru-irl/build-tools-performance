import React from 'react';
const LABEL_24431 = 'component_24431';
export function Component24431({ value = 24431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24431, 'data-value': derived.doubled }, children);
}
export default Component24431;
