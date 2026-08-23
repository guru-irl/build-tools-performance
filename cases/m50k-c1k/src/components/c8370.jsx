import React from 'react';
const LABEL_8370 = 'component_8370';
export function Component8370({ value = 8370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8370, 'data-value': derived.doubled }, children);
}
export default Component8370;
