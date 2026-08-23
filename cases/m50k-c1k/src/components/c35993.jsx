import React from 'react';
const LABEL_35993 = 'component_35993';
export function Component35993({ value = 35993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35993, 'data-value': derived.doubled }, children);
}
export default Component35993;
