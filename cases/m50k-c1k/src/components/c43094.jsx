import React from 'react';
const LABEL_43094 = 'component_43094';
export function Component43094({ value = 43094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43094, 'data-value': derived.doubled }, children);
}
export default Component43094;
