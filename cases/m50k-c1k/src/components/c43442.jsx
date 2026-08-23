import React from 'react';
const LABEL_43442 = 'component_43442';
export function Component43442({ value = 43442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43442, 'data-value': derived.doubled }, children);
}
export default Component43442;
