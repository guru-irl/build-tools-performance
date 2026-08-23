import React from 'react';
const LABEL_42984 = 'component_42984';
export function Component42984({ value = 42984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42984, 'data-value': derived.doubled }, children);
}
export default Component42984;
