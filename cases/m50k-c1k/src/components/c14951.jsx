import React from 'react';
const LABEL_14951 = 'component_14951';
export function Component14951({ value = 14951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14951, 'data-value': derived.doubled }, children);
}
export default Component14951;
