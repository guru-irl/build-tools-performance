import React from 'react';
const LABEL_4993 = 'component_4993';
export function Component4993({ value = 4993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4993, 'data-value': derived.doubled }, children);
}
export default Component4993;
