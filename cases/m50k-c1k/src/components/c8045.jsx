import React from 'react';
const LABEL_8045 = 'component_8045';
export function Component8045({ value = 8045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8045, 'data-value': derived.doubled }, children);
}
export default Component8045;
