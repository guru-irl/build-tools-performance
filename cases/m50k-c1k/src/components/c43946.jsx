import React from 'react';
const LABEL_43946 = 'component_43946';
export function Component43946({ value = 43946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43946, 'data-value': derived.doubled }, children);
}
export default Component43946;
