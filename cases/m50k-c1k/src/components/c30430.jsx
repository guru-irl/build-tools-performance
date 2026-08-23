import React from 'react';
const LABEL_30430 = 'component_30430';
export function Component30430({ value = 30430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30430, 'data-value': derived.doubled }, children);
}
export default Component30430;
