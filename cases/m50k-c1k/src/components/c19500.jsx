import React from 'react';
const LABEL_19500 = 'component_19500';
export function Component19500({ value = 19500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19500, 'data-value': derived.doubled }, children);
}
export default Component19500;
