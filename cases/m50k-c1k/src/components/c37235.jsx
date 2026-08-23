import React from 'react';
const LABEL_37235 = 'component_37235';
export function Component37235({ value = 37235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37235, 'data-value': derived.doubled }, children);
}
export default Component37235;
