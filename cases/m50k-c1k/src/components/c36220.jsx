import React from 'react';
const LABEL_36220 = 'component_36220';
export function Component36220({ value = 36220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36220, 'data-value': derived.doubled }, children);
}
export default Component36220;
