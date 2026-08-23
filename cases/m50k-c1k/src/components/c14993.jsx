import React from 'react';
const LABEL_14993 = 'component_14993';
export function Component14993({ value = 14993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14993, 'data-value': derived.doubled }, children);
}
export default Component14993;
