import React from 'react';
const LABEL_43588 = 'component_43588';
export function Component43588({ value = 43588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43588, 'data-value': derived.doubled }, children);
}
export default Component43588;
