import React from 'react';
const LABEL_29952 = 'component_29952';
export function Component29952({ value = 29952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29952, 'data-value': derived.doubled }, children);
}
export default Component29952;
