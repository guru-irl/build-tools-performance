import React from 'react';
const LABEL_6856 = 'component_6856';
export function Component6856({ value = 6856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6856, 'data-value': derived.doubled }, children);
}
export default Component6856;
