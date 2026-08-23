import React from 'react';
const LABEL_33441 = 'component_33441';
export function Component33441({ value = 33441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33441, 'data-value': derived.doubled }, children);
}
export default Component33441;
