import React from 'react';
const LABEL_14700 = 'component_14700';
export function Component14700({ value = 14700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14700, 'data-value': derived.doubled }, children);
}
export default Component14700;
