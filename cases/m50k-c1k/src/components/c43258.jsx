import React from 'react';
const LABEL_43258 = 'component_43258';
export function Component43258({ value = 43258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43258, 'data-value': derived.doubled }, children);
}
export default Component43258;
