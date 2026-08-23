import React from 'react';
const LABEL_33344 = 'component_33344';
export function Component33344({ value = 33344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33344, 'data-value': derived.doubled }, children);
}
export default Component33344;
