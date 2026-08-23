import React from 'react';
const LABEL_46020 = 'component_46020';
export function Component46020({ value = 46020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46020, 'data-value': derived.doubled }, children);
}
export default Component46020;
