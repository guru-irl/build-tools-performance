import React from 'react';
const LABEL_43155 = 'component_43155';
export function Component43155({ value = 43155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43155, 'data-value': derived.doubled }, children);
}
export default Component43155;
