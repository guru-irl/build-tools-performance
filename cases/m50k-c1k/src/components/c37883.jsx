import React from 'react';
const LABEL_37883 = 'component_37883';
export function Component37883({ value = 37883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37883, 'data-value': derived.doubled }, children);
}
export default Component37883;
