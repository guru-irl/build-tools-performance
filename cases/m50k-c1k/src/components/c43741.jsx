import React from 'react';
const LABEL_43741 = 'component_43741';
export function Component43741({ value = 43741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43741, 'data-value': derived.doubled }, children);
}
export default Component43741;
