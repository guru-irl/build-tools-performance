import React from 'react';
const LABEL_22993 = 'component_22993';
export function Component22993({ value = 22993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22993, 'data-value': derived.doubled }, children);
}
export default Component22993;
