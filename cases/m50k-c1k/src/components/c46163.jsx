import React from 'react';
const LABEL_46163 = 'component_46163';
export function Component46163({ value = 46163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46163, 'data-value': derived.doubled }, children);
}
export default Component46163;
