import React from 'react';
const LABEL_14036 = 'component_14036';
export function Component14036({ value = 14036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14036, 'data-value': derived.doubled }, children);
}
export default Component14036;
