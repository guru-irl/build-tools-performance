import React from 'react';
const LABEL_6227 = 'component_6227';
export function Component6227({ value = 6227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6227, 'data-value': derived.doubled }, children);
}
export default Component6227;
