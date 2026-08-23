import React from 'react';
const LABEL_40439 = 'component_40439';
export function Component40439({ value = 40439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40439, 'data-value': derived.doubled }, children);
}
export default Component40439;
