import React from 'react';
const LABEL_43024 = 'component_43024';
export function Component43024({ value = 43024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43024, 'data-value': derived.doubled }, children);
}
export default Component43024;
