import React from 'react';
const LABEL_45252 = 'component_45252';
export function Component45252({ value = 45252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45252, 'data-value': derived.doubled }, children);
}
export default Component45252;
