import React from 'react';
const LABEL_20220 = 'component_20220';
export function Component20220({ value = 20220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20220, 'data-value': derived.doubled }, children);
}
export default Component20220;
