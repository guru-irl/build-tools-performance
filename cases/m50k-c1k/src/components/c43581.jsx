import React from 'react';
const LABEL_43581 = 'component_43581';
export function Component43581({ value = 43581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43581, 'data-value': derived.doubled }, children);
}
export default Component43581;
