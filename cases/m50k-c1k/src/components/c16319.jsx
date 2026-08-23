import React from 'react';
const LABEL_16319 = 'component_16319';
export function Component16319({ value = 16319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16319, 'data-value': derived.doubled }, children);
}
export default Component16319;
