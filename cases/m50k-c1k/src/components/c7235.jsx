import React from 'react';
const LABEL_7235 = 'component_7235';
export function Component7235({ value = 7235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7235, 'data-value': derived.doubled }, children);
}
export default Component7235;
