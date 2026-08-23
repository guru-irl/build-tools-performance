import React from 'react';
const LABEL_30580 = 'component_30580';
export function Component30580({ value = 30580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30580, 'data-value': derived.doubled }, children);
}
export default Component30580;
