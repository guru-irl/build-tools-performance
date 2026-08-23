import React from 'react';
const LABEL_14023 = 'component_14023';
export function Component14023({ value = 14023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14023, 'data-value': derived.doubled }, children);
}
export default Component14023;
