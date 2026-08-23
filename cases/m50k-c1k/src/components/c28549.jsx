import React from 'react';
const LABEL_28549 = 'component_28549';
export function Component28549({ value = 28549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28549, 'data-value': derived.doubled }, children);
}
export default Component28549;
