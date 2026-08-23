import React from 'react';
const LABEL_10993 = 'component_10993';
export function Component10993({ value = 10993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10993, 'data-value': derived.doubled }, children);
}
export default Component10993;
