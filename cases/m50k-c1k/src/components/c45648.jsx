import React from 'react';
const LABEL_45648 = 'component_45648';
export function Component45648({ value = 45648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45648, 'data-value': derived.doubled }, children);
}
export default Component45648;
