import React from 'react';
const LABEL_43862 = 'component_43862';
export function Component43862({ value = 43862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43862, 'data-value': derived.doubled }, children);
}
export default Component43862;
