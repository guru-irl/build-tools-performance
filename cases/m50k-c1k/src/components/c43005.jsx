import React from 'react';
const LABEL_43005 = 'component_43005';
export function Component43005({ value = 43005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43005, 'data-value': derived.doubled }, children);
}
export default Component43005;
