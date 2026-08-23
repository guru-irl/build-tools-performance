import React from 'react';
const LABEL_43444 = 'component_43444';
export function Component43444({ value = 43444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43444, 'data-value': derived.doubled }, children);
}
export default Component43444;
