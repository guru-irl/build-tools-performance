import React from 'react';
const LABEL_43775 = 'component_43775';
export function Component43775({ value = 43775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43775, 'data-value': derived.doubled }, children);
}
export default Component43775;
