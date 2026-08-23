import React from 'react';
const LABEL_10180 = 'component_10180';
export function Component10180({ value = 10180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10180, 'data-value': derived.doubled }, children);
}
export default Component10180;
