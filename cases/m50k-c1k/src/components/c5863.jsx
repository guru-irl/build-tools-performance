import React from 'react';
const LABEL_5863 = 'component_5863';
export function Component5863({ value = 5863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5863, 'data-value': derived.doubled }, children);
}
export default Component5863;
