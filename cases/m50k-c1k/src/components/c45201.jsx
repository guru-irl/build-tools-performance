import React from 'react';
const LABEL_45201 = 'component_45201';
export function Component45201({ value = 45201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45201, 'data-value': derived.doubled }, children);
}
export default Component45201;
