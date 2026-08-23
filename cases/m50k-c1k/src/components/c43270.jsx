import React from 'react';
const LABEL_43270 = 'component_43270';
export function Component43270({ value = 43270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43270, 'data-value': derived.doubled }, children);
}
export default Component43270;
