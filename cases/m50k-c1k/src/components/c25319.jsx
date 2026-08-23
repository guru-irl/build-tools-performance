import React from 'react';
const LABEL_25319 = 'component_25319';
export function Component25319({ value = 25319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25319, 'data-value': derived.doubled }, children);
}
export default Component25319;
