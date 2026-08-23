import React from 'react';
const LABEL_3670 = 'component_3670';
export function Component3670({ value = 3670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3670, 'data-value': derived.doubled }, children);
}
export default Component3670;
