import React from 'react';
const LABEL_43235 = 'component_43235';
export function Component43235({ value = 43235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43235, 'data-value': derived.doubled }, children);
}
export default Component43235;
