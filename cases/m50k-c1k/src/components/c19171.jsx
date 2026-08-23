import React from 'react';
const LABEL_19171 = 'component_19171';
export function Component19171({ value = 19171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19171, 'data-value': derived.doubled }, children);
}
export default Component19171;
