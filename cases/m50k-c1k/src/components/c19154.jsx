import React from 'react';
const LABEL_19154 = 'component_19154';
export function Component19154({ value = 19154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19154, 'data-value': derived.doubled }, children);
}
export default Component19154;
