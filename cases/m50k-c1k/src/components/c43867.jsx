import React from 'react';
const LABEL_43867 = 'component_43867';
export function Component43867({ value = 43867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43867, 'data-value': derived.doubled }, children);
}
export default Component43867;
