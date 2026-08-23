import React from 'react';
const LABEL_42001 = 'component_42001';
export function Component42001({ value = 42001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42001, 'data-value': derived.doubled }, children);
}
export default Component42001;
