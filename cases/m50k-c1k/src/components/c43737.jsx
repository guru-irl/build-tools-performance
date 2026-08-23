import React from 'react';
const LABEL_43737 = 'component_43737';
export function Component43737({ value = 43737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43737, 'data-value': derived.doubled }, children);
}
export default Component43737;
