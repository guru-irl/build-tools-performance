import React from 'react';
const LABEL_45575 = 'component_45575';
export function Component45575({ value = 45575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45575, 'data-value': derived.doubled }, children);
}
export default Component45575;
