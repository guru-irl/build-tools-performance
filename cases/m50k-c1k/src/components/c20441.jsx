import React from 'react';
const LABEL_20441 = 'component_20441';
export function Component20441({ value = 20441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20441, 'data-value': derived.doubled }, children);
}
export default Component20441;
