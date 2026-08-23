import React from 'react';
const LABEL_35044 = 'component_35044';
export function Component35044({ value = 35044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35044, 'data-value': derived.doubled }, children);
}
export default Component35044;
