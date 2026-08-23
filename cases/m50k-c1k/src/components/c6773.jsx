import React from 'react';
const LABEL_6773 = 'component_6773';
export function Component6773({ value = 6773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6773, 'data-value': derived.doubled }, children);
}
export default Component6773;
