import React from 'react';
const LABEL_20520 = 'component_20520';
export function Component20520({ value = 20520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20520, 'data-value': derived.doubled }, children);
}
export default Component20520;
