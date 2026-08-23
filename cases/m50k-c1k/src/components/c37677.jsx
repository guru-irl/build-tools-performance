import React from 'react';
const LABEL_37677 = 'component_37677';
export function Component37677({ value = 37677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37677, 'data-value': derived.doubled }, children);
}
export default Component37677;
