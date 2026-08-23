import React from 'react';
const LABEL_45739 = 'component_45739';
export function Component45739({ value = 45739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45739, 'data-value': derived.doubled }, children);
}
export default Component45739;
