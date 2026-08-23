import React from 'react';
const LABEL_42370 = 'component_42370';
export function Component42370({ value = 42370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42370, 'data-value': derived.doubled }, children);
}
export default Component42370;
