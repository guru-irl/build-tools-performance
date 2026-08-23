import React from 'react';
const LABEL_19263 = 'component_19263';
export function Component19263({ value = 19263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19263, 'data-value': derived.doubled }, children);
}
export default Component19263;
