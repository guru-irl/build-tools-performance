import React from 'react';
const LABEL_44370 = 'component_44370';
export function Component44370({ value = 44370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44370, 'data-value': derived.doubled }, children);
}
export default Component44370;
