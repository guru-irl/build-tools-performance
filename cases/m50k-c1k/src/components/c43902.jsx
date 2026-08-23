import React from 'react';
const LABEL_43902 = 'component_43902';
export function Component43902({ value = 43902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43902, 'data-value': derived.doubled }, children);
}
export default Component43902;
