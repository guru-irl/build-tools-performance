import React from 'react';
const LABEL_45015 = 'component_45015';
export function Component45015({ value = 45015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45015, 'data-value': derived.doubled }, children);
}
export default Component45015;
