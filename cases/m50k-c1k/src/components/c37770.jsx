import React from 'react';
const LABEL_37770 = 'component_37770';
export function Component37770({ value = 37770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37770, 'data-value': derived.doubled }, children);
}
export default Component37770;
