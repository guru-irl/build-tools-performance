import React from 'react';
const LABEL_4773 = 'component_4773';
export function Component4773({ value = 4773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4773, 'data-value': derived.doubled }, children);
}
export default Component4773;
