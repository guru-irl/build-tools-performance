import React from 'react';
const LABEL_34048 = 'component_34048';
export function Component34048({ value = 34048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34048, 'data-value': derived.doubled }, children);
}
export default Component34048;
