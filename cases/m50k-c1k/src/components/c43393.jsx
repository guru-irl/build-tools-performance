import React from 'react';
const LABEL_43393 = 'component_43393';
export function Component43393({ value = 43393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43393, 'data-value': derived.doubled }, children);
}
export default Component43393;
