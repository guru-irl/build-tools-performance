import React from 'react';
const LABEL_16278 = 'component_16278';
export function Component16278({ value = 16278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16278, 'data-value': derived.doubled }, children);
}
export default Component16278;
