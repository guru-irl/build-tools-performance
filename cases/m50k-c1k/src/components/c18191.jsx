import React from 'react';
const LABEL_18191 = 'component_18191';
export function Component18191({ value = 18191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18191, 'data-value': derived.doubled }, children);
}
export default Component18191;
