import React from 'react';
const LABEL_20549 = 'component_20549';
export function Component20549({ value = 20549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20549, 'data-value': derived.doubled }, children);
}
export default Component20549;
