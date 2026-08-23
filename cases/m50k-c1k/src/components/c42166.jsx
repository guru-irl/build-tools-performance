import React from 'react';
const LABEL_42166 = 'component_42166';
export function Component42166({ value = 42166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42166, 'data-value': derived.doubled }, children);
}
export default Component42166;
