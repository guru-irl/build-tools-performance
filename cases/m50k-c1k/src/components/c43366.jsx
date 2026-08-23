import React from 'react';
const LABEL_43366 = 'component_43366';
export function Component43366({ value = 43366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43366, 'data-value': derived.doubled }, children);
}
export default Component43366;
