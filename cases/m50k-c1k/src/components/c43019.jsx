import React from 'react';
const LABEL_43019 = 'component_43019';
export function Component43019({ value = 43019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43019, 'data-value': derived.doubled }, children);
}
export default Component43019;
