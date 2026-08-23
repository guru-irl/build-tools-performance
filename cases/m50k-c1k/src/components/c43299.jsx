import React from 'react';
const LABEL_43299 = 'component_43299';
export function Component43299({ value = 43299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43299, 'data-value': derived.doubled }, children);
}
export default Component43299;
