import React from 'react';
const LABEL_43957 = 'component_43957';
export function Component43957({ value = 43957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43957, 'data-value': derived.doubled }, children);
}
export default Component43957;
