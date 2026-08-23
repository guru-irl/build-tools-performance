import React from 'react';
const LABEL_37319 = 'component_37319';
export function Component37319({ value = 37319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37319, 'data-value': derived.doubled }, children);
}
export default Component37319;
