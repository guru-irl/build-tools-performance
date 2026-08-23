import React from 'react';
const LABEL_46366 = 'component_46366';
export function Component46366({ value = 46366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46366, 'data-value': derived.doubled }, children);
}
export default Component46366;
