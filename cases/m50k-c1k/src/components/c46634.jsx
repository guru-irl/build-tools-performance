import React from 'react';
const LABEL_46634 = 'component_46634';
export function Component46634({ value = 46634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46634, 'data-value': derived.doubled }, children);
}
export default Component46634;
