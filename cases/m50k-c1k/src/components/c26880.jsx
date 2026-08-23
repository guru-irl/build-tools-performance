import React from 'react';
const LABEL_26880 = 'component_26880';
export function Component26880({ value = 26880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26880, 'data-value': derived.doubled }, children);
}
export default Component26880;
