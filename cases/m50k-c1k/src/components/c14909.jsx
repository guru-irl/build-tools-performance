import React from 'react';
const LABEL_14909 = 'component_14909';
export function Component14909({ value = 14909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14909, 'data-value': derived.doubled }, children);
}
export default Component14909;
