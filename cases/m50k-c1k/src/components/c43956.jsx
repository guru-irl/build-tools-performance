import React from 'react';
const LABEL_43956 = 'component_43956';
export function Component43956({ value = 43956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43956, 'data-value': derived.doubled }, children);
}
export default Component43956;
