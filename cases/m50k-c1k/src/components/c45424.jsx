import React from 'react';
const LABEL_45424 = 'component_45424';
export function Component45424({ value = 45424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45424, 'data-value': derived.doubled }, children);
}
export default Component45424;
