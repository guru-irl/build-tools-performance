import React from 'react';
const LABEL_43323 = 'component_43323';
export function Component43323({ value = 43323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43323, 'data-value': derived.doubled }, children);
}
export default Component43323;
