import React from 'react';
const LABEL_4946 = 'component_4946';
export function Component4946({ value = 4946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4946, 'data-value': derived.doubled }, children);
}
export default Component4946;
