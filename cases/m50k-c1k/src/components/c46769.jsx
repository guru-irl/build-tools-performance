import React from 'react';
const LABEL_46769 = 'component_46769';
export function Component46769({ value = 46769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46769, 'data-value': derived.doubled }, children);
}
export default Component46769;
