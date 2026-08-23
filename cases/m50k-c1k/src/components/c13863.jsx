import React from 'react';
const LABEL_13863 = 'component_13863';
export function Component13863({ value = 13863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13863, 'data-value': derived.doubled }, children);
}
export default Component13863;
