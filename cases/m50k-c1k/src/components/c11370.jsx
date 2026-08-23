import React from 'react';
const LABEL_11370 = 'component_11370';
export function Component11370({ value = 11370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11370, 'data-value': derived.doubled }, children);
}
export default Component11370;
