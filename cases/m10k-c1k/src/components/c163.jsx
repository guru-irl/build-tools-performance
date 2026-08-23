import React from 'react';
const LABEL_163 = 'component_163';
export function Component163({ value = 163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_163, 'data-value': derived.doubled }, children);
}
export default Component163;
