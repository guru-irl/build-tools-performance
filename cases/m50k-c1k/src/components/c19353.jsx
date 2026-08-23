import React from 'react';
const LABEL_19353 = 'component_19353';
export function Component19353({ value = 19353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19353, 'data-value': derived.doubled }, children);
}
export default Component19353;
