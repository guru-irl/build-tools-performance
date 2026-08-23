import React from 'react';
const LABEL_4463 = 'component_4463';
export function Component4463({ value = 4463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4463, 'data-value': derived.doubled }, children);
}
export default Component4463;
