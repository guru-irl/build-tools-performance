import React from 'react';
const LABEL_45240 = 'component_45240';
export function Component45240({ value = 45240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45240, 'data-value': derived.doubled }, children);
}
export default Component45240;
