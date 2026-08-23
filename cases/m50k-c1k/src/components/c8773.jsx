import React from 'react';
const LABEL_8773 = 'component_8773';
export function Component8773({ value = 8773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8773, 'data-value': derived.doubled }, children);
}
export default Component8773;
