import React from 'react';
const LABEL_4319 = 'component_4319';
export function Component4319({ value = 4319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4319, 'data-value': derived.doubled }, children);
}
export default Component4319;
