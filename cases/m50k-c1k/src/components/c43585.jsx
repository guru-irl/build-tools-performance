import React from 'react';
const LABEL_43585 = 'component_43585';
export function Component43585({ value = 43585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43585, 'data-value': derived.doubled }, children);
}
export default Component43585;
