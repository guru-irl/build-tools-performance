import React from 'react';
const LABEL_20880 = 'component_20880';
export function Component20880({ value = 20880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20880, 'data-value': derived.doubled }, children);
}
export default Component20880;
