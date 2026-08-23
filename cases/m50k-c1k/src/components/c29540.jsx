import React from 'react';
const LABEL_29540 = 'component_29540';
export function Component29540({ value = 29540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29540, 'data-value': derived.doubled }, children);
}
export default Component29540;
