import React from 'react';
const LABEL_30288 = 'component_30288';
export function Component30288({ value = 30288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30288, 'data-value': derived.doubled }, children);
}
export default Component30288;
