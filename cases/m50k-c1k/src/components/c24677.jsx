import React from 'react';
const LABEL_24677 = 'component_24677';
export function Component24677({ value = 24677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24677, 'data-value': derived.doubled }, children);
}
export default Component24677;
