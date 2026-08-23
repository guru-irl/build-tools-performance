import React from 'react';
const LABEL_43820 = 'component_43820';
export function Component43820({ value = 43820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43820, 'data-value': derived.doubled }, children);
}
export default Component43820;
