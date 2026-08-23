import React from 'react';
const LABEL_37066 = 'component_37066';
export function Component37066({ value = 37066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37066, 'data-value': derived.doubled }, children);
}
export default Component37066;
