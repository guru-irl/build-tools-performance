import React from 'react';
const LABEL_24863 = 'component_24863';
export function Component24863({ value = 24863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24863, 'data-value': derived.doubled }, children);
}
export default Component24863;
