import React from 'react';
const LABEL_5549 = 'component_5549';
export function Component5549({ value = 5549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5549, 'data-value': derived.doubled }, children);
}
export default Component5549;
