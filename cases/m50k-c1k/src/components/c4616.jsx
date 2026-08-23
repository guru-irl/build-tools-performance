import React from 'react';
const LABEL_4616 = 'component_4616';
export function Component4616({ value = 4616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4616, 'data-value': derived.doubled }, children);
}
export default Component4616;
