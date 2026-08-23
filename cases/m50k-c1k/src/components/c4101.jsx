import React from 'react';
const LABEL_4101 = 'component_4101';
export function Component4101({ value = 4101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4101, 'data-value': derived.doubled }, children);
}
export default Component4101;
