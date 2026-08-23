import React from 'react';
const LABEL_5194 = 'component_5194';
export function Component5194({ value = 5194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5194, 'data-value': derived.doubled }, children);
}
export default Component5194;
