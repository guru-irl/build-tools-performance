import React from 'react';
const LABEL_13993 = 'component_13993';
export function Component13993({ value = 13993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13993, 'data-value': derived.doubled }, children);
}
export default Component13993;
