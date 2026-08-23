import React from 'react';
const LABEL_45547 = 'component_45547';
export function Component45547({ value = 45547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45547, 'data-value': derived.doubled }, children);
}
export default Component45547;
