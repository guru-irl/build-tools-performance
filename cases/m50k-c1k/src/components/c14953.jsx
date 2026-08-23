import React from 'react';
const LABEL_14953 = 'component_14953';
export function Component14953({ value = 14953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14953, 'data-value': derived.doubled }, children);
}
export default Component14953;
