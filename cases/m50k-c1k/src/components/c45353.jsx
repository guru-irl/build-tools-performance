import React from 'react';
const LABEL_45353 = 'component_45353';
export function Component45353({ value = 45353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45353, 'data-value': derived.doubled }, children);
}
export default Component45353;
