import React from 'react';
const LABEL_16868 = 'component_16868';
export function Component16868({ value = 16868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16868, 'data-value': derived.doubled }, children);
}
export default Component16868;
