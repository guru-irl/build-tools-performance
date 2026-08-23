import React from 'react';
const LABEL_41370 = 'component_41370';
export function Component41370({ value = 41370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41370, 'data-value': derived.doubled }, children);
}
export default Component41370;
