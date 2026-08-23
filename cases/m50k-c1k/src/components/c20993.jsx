import React from 'react';
const LABEL_20993 = 'component_20993';
export function Component20993({ value = 20993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20993, 'data-value': derived.doubled }, children);
}
export default Component20993;
