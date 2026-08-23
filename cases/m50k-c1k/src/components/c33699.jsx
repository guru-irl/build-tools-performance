import React from 'react';
const LABEL_33699 = 'component_33699';
export function Component33699({ value = 33699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33699, 'data-value': derived.doubled }, children);
}
export default Component33699;
