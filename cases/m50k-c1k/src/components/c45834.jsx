import React from 'react';
const LABEL_45834 = 'component_45834';
export function Component45834({ value = 45834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45834, 'data-value': derived.doubled }, children);
}
export default Component45834;
