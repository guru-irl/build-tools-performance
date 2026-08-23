import React from 'react';
const LABEL_850 = 'component_850';
export function Component850({ value = 850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_850, 'data-value': derived.doubled }, children);
}
export default Component850;
