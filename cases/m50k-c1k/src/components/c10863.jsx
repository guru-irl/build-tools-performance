import React from 'react';
const LABEL_10863 = 'component_10863';
export function Component10863({ value = 10863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10863, 'data-value': derived.doubled }, children);
}
export default Component10863;
