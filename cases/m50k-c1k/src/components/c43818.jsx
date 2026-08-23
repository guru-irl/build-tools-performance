import React from 'react';
const LABEL_43818 = 'component_43818';
export function Component43818({ value = 43818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43818, 'data-value': derived.doubled }, children);
}
export default Component43818;
