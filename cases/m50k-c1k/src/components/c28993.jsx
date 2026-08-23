import React from 'react';
const LABEL_28993 = 'component_28993';
export function Component28993({ value = 28993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28993, 'data-value': derived.doubled }, children);
}
export default Component28993;
