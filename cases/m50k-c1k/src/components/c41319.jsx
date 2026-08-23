import React from 'react';
const LABEL_41319 = 'component_41319';
export function Component41319({ value = 41319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41319, 'data-value': derived.doubled }, children);
}
export default Component41319;
