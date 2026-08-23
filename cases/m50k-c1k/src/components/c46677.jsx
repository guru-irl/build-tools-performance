import React from 'react';
const LABEL_46677 = 'component_46677';
export function Component46677({ value = 46677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46677, 'data-value': derived.doubled }, children);
}
export default Component46677;
