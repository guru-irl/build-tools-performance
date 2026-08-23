import React from 'react';
const LABEL_31370 = 'component_31370';
export function Component31370({ value = 31370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31370, 'data-value': derived.doubled }, children);
}
export default Component31370;
