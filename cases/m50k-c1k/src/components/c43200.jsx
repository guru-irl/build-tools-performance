import React from 'react';
const LABEL_43200 = 'component_43200';
export function Component43200({ value = 43200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43200, 'data-value': derived.doubled }, children);
}
export default Component43200;
