import React from 'react';
const LABEL_45944 = 'component_45944';
export function Component45944({ value = 45944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45944, 'data-value': derived.doubled }, children);
}
export default Component45944;
