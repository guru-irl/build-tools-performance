import React from 'react';
const LABEL_43776 = 'component_43776';
export function Component43776({ value = 43776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43776, 'data-value': derived.doubled }, children);
}
export default Component43776;
