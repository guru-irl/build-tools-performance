import React from 'react';
const LABEL_993 = 'component_993';
export function Component993({ value = 993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_993, 'data-value': derived.doubled }, children);
}
export default Component993;
