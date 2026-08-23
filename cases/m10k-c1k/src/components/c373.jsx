import React from 'react';
const LABEL_373 = 'component_373';
export function Component373({ value = 373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_373, 'data-value': derived.doubled }, children);
}
export default Component373;
