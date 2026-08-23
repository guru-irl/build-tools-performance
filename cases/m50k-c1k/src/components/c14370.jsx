import React from 'react';
const LABEL_14370 = 'component_14370';
export function Component14370({ value = 14370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14370, 'data-value': derived.doubled }, children);
}
export default Component14370;
