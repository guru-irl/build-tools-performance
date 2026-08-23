import React from 'react';
const LABEL_45302 = 'component_45302';
export function Component45302({ value = 45302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45302, 'data-value': derived.doubled }, children);
}
export default Component45302;
