import React from 'react';
const LABEL_19218 = 'component_19218';
export function Component19218({ value = 19218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19218, 'data-value': derived.doubled }, children);
}
export default Component19218;
