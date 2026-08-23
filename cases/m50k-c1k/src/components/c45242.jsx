import React from 'react';
const LABEL_45242 = 'component_45242';
export function Component45242({ value = 45242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45242, 'data-value': derived.doubled }, children);
}
export default Component45242;
