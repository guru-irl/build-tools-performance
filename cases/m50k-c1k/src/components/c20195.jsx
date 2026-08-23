import React from 'react';
const LABEL_20195 = 'component_20195';
export function Component20195({ value = 20195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20195, 'data-value': derived.doubled }, children);
}
export default Component20195;
