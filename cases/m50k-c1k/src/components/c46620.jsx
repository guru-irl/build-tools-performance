import React from 'react';
const LABEL_46620 = 'component_46620';
export function Component46620({ value = 46620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46620, 'data-value': derived.doubled }, children);
}
export default Component46620;
