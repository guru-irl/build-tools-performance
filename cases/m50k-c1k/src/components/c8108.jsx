import React from 'react';
const LABEL_8108 = 'component_8108';
export function Component8108({ value = 8108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8108, 'data-value': derived.doubled }, children);
}
export default Component8108;
