import React from 'react';
const LABEL_42263 = 'component_42263';
export function Component42263({ value = 42263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42263, 'data-value': derived.doubled }, children);
}
export default Component42263;
