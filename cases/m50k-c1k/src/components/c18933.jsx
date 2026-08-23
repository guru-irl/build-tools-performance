import React from 'react';
const LABEL_18933 = 'component_18933';
export function Component18933({ value = 18933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18933, 'data-value': derived.doubled }, children);
}
export default Component18933;
