import React from 'react';
const LABEL_37880 = 'component_37880';
export function Component37880({ value = 37880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37880, 'data-value': derived.doubled }, children);
}
export default Component37880;
