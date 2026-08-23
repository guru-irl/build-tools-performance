import React from 'react';
const LABEL_43082 = 'component_43082';
export function Component43082({ value = 43082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43082, 'data-value': derived.doubled }, children);
}
export default Component43082;
