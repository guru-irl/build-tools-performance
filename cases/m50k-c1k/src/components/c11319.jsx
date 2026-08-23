import React from 'react';
const LABEL_11319 = 'component_11319';
export function Component11319({ value = 11319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11319, 'data-value': derived.doubled }, children);
}
export default Component11319;
