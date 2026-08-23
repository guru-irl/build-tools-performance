import React from 'react';
const LABEL_43686 = 'component_43686';
export function Component43686({ value = 43686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43686, 'data-value': derived.doubled }, children);
}
export default Component43686;
