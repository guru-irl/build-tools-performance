import React from 'react';
const LABEL_16549 = 'component_16549';
export function Component16549({ value = 16549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16549, 'data-value': derived.doubled }, children);
}
export default Component16549;
