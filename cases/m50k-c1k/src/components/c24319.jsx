import React from 'react';
const LABEL_24319 = 'component_24319';
export function Component24319({ value = 24319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24319, 'data-value': derived.doubled }, children);
}
export default Component24319;
