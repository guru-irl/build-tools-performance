import React from 'react';
const LABEL_45984 = 'component_45984';
export function Component45984({ value = 45984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45984, 'data-value': derived.doubled }, children);
}
export default Component45984;
