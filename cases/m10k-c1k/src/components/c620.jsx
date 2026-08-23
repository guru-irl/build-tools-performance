import React from 'react';
const LABEL_620 = 'component_620';
export function Component620({ value = 620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_620, 'data-value': derived.doubled }, children);
}
export default Component620;
