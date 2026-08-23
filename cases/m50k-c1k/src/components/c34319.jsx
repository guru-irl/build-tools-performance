import React from 'react';
const LABEL_34319 = 'component_34319';
export function Component34319({ value = 34319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34319, 'data-value': derived.doubled }, children);
}
export default Component34319;
