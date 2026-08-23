import React from 'react';
const LABEL_18724 = 'component_18724';
export function Component18724({ value = 18724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18724, 'data-value': derived.doubled }, children);
}
export default Component18724;
