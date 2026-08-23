import React from 'react';
const LABEL_11121 = 'component_11121';
export function Component11121({ value = 11121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11121, 'data-value': derived.doubled }, children);
}
export default Component11121;
