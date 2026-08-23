import React from 'react';
const LABEL_4235 = 'component_4235';
export function Component4235({ value = 4235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4235, 'data-value': derived.doubled }, children);
}
export default Component4235;
