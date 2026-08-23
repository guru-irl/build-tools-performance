import React from 'react';
const LABEL_45957 = 'component_45957';
export function Component45957({ value = 45957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45957, 'data-value': derived.doubled }, children);
}
export default Component45957;
