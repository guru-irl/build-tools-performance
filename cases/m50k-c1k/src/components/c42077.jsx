import React from 'react';
const LABEL_42077 = 'component_42077';
export function Component42077({ value = 42077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42077, 'data-value': derived.doubled }, children);
}
export default Component42077;
