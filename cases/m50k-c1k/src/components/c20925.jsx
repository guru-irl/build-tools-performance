import React from 'react';
const LABEL_20925 = 'component_20925';
export function Component20925({ value = 20925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20925, 'data-value': derived.doubled }, children);
}
export default Component20925;
