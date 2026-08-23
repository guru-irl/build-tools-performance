import React from 'react';
const LABEL_43974 = 'component_43974';
export function Component43974({ value = 43974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43974, 'data-value': derived.doubled }, children);
}
export default Component43974;
