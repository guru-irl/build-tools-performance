import React from 'react';
const LABEL_22295 = 'component_22295';
export function Component22295({ value = 22295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22295, 'data-value': derived.doubled }, children);
}
export default Component22295;
