import React from 'react';
const LABEL_4364 = 'component_4364';
export function Component4364({ value = 4364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4364, 'data-value': derived.doubled }, children);
}
export default Component4364;
